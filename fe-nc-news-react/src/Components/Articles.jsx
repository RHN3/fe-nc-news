import React from "react";
import { useState } from "react";

import ArticleList from "./ArticleList";

function Articles() {
  const [articles, setArticles] = useState();
  return (
    <div>
      <select name="topics" id="topics">
        <option value="all">all</option>
      </select>
      <ArticleList articles={articles} setArticles={setArticles} />
    </div>
  );
}

export default Articles;
