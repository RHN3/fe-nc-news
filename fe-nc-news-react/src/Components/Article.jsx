import React from "react";
import { Link } from "react-router-dom";

function Article(props) {
  const { article } = props;
  return (
    <Link to={`/Articles/${article.article_id}`}>
      <div className="article-card">
        <img
          className="article-img"
          src={article.article_img_url}
          alt="article image"
        />
        <h2 className="article-title">{article.title}</h2>
        <p className="article-author">{article.author}</p>
      </div>
    </Link>
  );
}

export default Article;
