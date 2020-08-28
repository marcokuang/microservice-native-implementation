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
    return comments.map(({ id, comment, status }) => {
      let result = comment;
      if (status === "rejected") {
        result = "The comment has been rejected";
      }

      if (status === "pending") {
        result = "Comment is awaiting moderation";
      }
      return <li key={id}>{result}</li>;
    });
  };

  return (
    <div>
      <p>{comments.length + " comments"}</p>
      <ul>{renderComments()}</ul>
    </div>
  );
}
