import React from "react";
import { useState } from "react";

import ArticleList from "./ArticleList";

function Articles() {
  const [articles, setArticles] = useState();
  return (
    <div>
      <ArticleList articles={articles} setArticles={setArticles} />
    </div>
  );
}

export default Articles;
