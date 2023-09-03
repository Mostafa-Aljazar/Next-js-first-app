import PostDetailes from "@/app/components/postDetailes";
import { Suspense } from "react";

const PostDetailesPage = async ({ params }) => {
  const postId = params.postId;

  const loadingJsx = (
    <div>
      <h1>wait...</h1>
    </div>
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Post Detailes</h1>
      <Suspense fallback={loadingJsx}>
        <PostDetailes postId={postId} />
      </Suspense>
    </div>
  );
};

export default PostDetailesPage;
