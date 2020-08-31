import React, { useState } from "react";
import axios from "axios";

export default function CommentCreate({ postId }) {
  let [comment, setComment] = useState("");
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost/posts/${postId}/comments`, {
        comment,
      })
      .then(() => {
        setComment("");
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="comment">New Comment</label>
          <input
            type="text"
            name="comment"
            className="form-control"
            value={comment}
            onChange={handleCommentChange}
          />
        </div>
        <button className="btn-primary btn">Submit</button>
      </form>
    </div>
  );
}
