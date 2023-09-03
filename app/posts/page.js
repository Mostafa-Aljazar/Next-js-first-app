import { Suspense } from "react";
import Todo from "../components/todo";
import Link from "next/link";

export const metadata = {
  title: "Posts",
};

const PostsPage = async () => {

  
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    // cache:"no-store",//SSR =>server side rendering
    // cache:"force-cache",//SSG =>static side generation
    next: {
      //ISG =>incremental static regeneration
      revalidate: 120, //(time in second)
    },
  });
  const posts = await response.json();
  // console.log(posts);

  const postJSX = posts.map((post) => {
    return (
      <Link href={`/posts/${post.id}`} style={{ width: "70%" }}>
        <div
          style={{
            width: "100%",
            backgroundColor: "white",
            padding: "10px",
            borderRadius: "10px",
            color: "black",
            marginTop: "20px",
          }}
        >
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      </Link>
    );
  });
  return (
    <div className="main-div" style={{ backgroundColor: "black" }}>
      <h1>Posts</h1>

      {/* POSTS */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {postJSX}
      </div>
    </div>
  );
};

export default PostsPage;
