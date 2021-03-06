import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

export default function PostList() {
  const [posts, setPosts] = useState({});
  const fetchPosts = async () => {
    const result = await axios.get("http://localhost/query/posts");
    setPosts(result.data);
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  const renderPosts = () => {
    return Object.values(posts).map((post) => {
      return (
        <div
          className="card"
          key={post.id}
          style={{ width: "30%", marginBottom: "20px" }}
        >
          <div className="card-body">
            <h3>{post.title}</h3>
            <CommentList comments={post.comments} />
            <hr></hr>
            <CommentCreate postId={post.id} />
          </div>
        </div>
      );
    });
  };

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderPosts()}
    </div>
  );
}
