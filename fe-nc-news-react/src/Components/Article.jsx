import React from "react";

function Article(props) {
  const { article } = props;
  return (
    <div className="article-card">
      <img
        className="article-img"
        src={article.article_img_url}
        alt="article image"
      />
      <h2 className="article-title">{article.title}</h2>
      <p className="article-author">{article.author}</p>
    </div>
  );
}

export default Article;
