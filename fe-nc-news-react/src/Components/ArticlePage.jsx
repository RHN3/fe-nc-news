import React, { useEffect, useState } from "react";
import { getArticlesById } from "../../api";
import { useParams } from "react-router-dom";
import Comments from "./Comments";

function ArticlePage() {
  const { article_id } = useParams();
  const [article, setArticle] = useState();
  const [isError, setisError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticlesById(article_id)
      .then((article) => {
        setArticle(article);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setisError(true);
      });
  });

  function handleClick() {
    console.log("in the handle click");
  }

  if (isError) {
    return <p>Server Error 1</p>;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="article-card-page">
        <h2 className="article-title-page">{article.title}</h2>
        <img
          className="article-img-page"
          src={article.article_img_url}
          alt="article image"
        />
        <p className="article-body-page">{article.body}</p>
        <h2 className="article-author-page">
          Posted by {article.author}, {article.created_at}
        </h2>
      </div>
      <div className="votes-article-page">
        <p>{article.votes}</p>
        <button className="Upvote-btn" onClick={handleClick}>
          Upvote
        </button>
        <button className="Downvote-btn" onClick={handleClick}>
          Downvote
        </button>
      </div>
      <Comments article_id={article.article_id}></Comments>
    </>
  );
}

export default ArticlePage;
