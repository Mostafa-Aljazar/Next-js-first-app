import Link from "next/link";
import React from "react";

const ArticlesPage = () => {
  return (
    <div>
      <h3>ArticlesPage</h3>
      <Link href="/posts">
        <button>Take me to posts page</button>
      </Link>
      <br />
      <Link href="/articles/featuredArticles">
        <button>Take me to articles/featuredArticles page</button>
      </Link>
    </div>
  );
};

export default ArticlesPage;
