const PostDetailes = async ({ postId }) => {
  
    await new Promise((resolve=>{
      setTimeout(()=>{
        resolve()
      },2000)
    }))
  
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
      {
        // cache:"no-store",//SSR =>server side rendering
        // cache:"force-cache",//SSG =>static side generation
        next: {
          //ISG =>incremental static regeneration
          revalidate: 120, //(time in second)
        },
      }
    );
    const post = await response.json();
  
    return (
      <div >
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
          <hr />
          <p>{post.body}</p>
        </div>
      </div>
    );
  };
  
  export default PostDetailes;
  