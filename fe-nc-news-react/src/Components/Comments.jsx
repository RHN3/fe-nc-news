import React, { useEffect, useState } from "react";
import { getAllCommentsByArticleId } from "../../api";
import Comment from "./Comment";

function Comments(props) {
  const { article_id } = props;
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getAllCommentsByArticleId(article_id).then((comments) => {
      setComments(comments);
    });
  }, []);

  return (
    <div className="article-page-comments">
      {comments.map((comment) => {
        return <Comment key={comment.comment_id} comment_body={comment} />;
      })}
    </div>
  );
}

export default Comments;
