import React from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

export default function app() {
  return (
    <div className="container ">
      <h1>Create Post V45</h1>
      <PostCreate />
      <hr></hr>
      <h1>Posts</h1>
      <PostList />
    </div>
  );
}
