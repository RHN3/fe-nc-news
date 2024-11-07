import React from "react";

function Comment(props) {
  const { comment_body } = props;

  function handleClick() {
    console.log("in the handle click");
  }

  return (
    <>
      <div className="comment-card">
        <h1>{comment_body.author}</h1>
        <p>
          {comment_body.body} {comment_body.created_at}
        </p>

        <div className="votes-comments">
          <p>{comment_body.votes}</p>
          <button className="Upvote-comments-btn" onClick={handleClick}>
            Upvote
          </button>
          <button className="Downvote-comments-btn" onClick={handleClick}>
            Downvote
          </button>
        </div>
      </div>
    </>
  );
}

export default Comment;
