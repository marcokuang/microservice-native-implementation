// import React, { useState, useEffect } from "react";
// import axios from "axios";
import React from "react";

export default function CommentList({ comments }) {
  // let [comments, setComments] = useState([]);

  // useEffect(() => {
  //   axios.get(`http://localhost:4001/posts/${postId}/comments`).then((res) => {
  //     setComments(res.data);
  //   });
  // }, [postId]);

  const renderComments = () => {
    return comments.map((comment) => {
      return <li key={comment.id}>{comment.comment}</li>;
    });
  };

  return (
    <div>
      <p>{comments.length + " comments"}</p>
      <ul>{renderComments()}</ul>
    </div>
  );
}
