import React from "react";
import { useState, useEffect } from "react";
import { getAllArticles } from "../../api";
import Article from "./Article";

function ArticleList(props) {
  const { articles, setArticles } = props;
  const [isError, setisError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllArticles()
      .then((allArticles) => {
        setArticles(allArticles);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setisError(true);
      });
  });

  if (isError) {
    return <p>Server Error 1</p>;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="article-list">
      {articles.map((article) => {
        return <Article key={article.article_id} article={article} />;
      })}
    </div>
  );
}

export default ArticleList;
