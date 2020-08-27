import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CommentList({ postId }) {
  let [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4001/posts/${postId}/comments`).then((res) => {
      setComments(res.data);
    });
  }, []);

  const renderComments = () => {
    return comments.map((comment) => {
      return <div>{comment.comment}</div>;
    });
  };

  return (
    <div>
      <p>{comments.length + " comments"}</p>
      {renderComments()}
    </div>
  );
}
