import React, { useState } from "react";
import axios from "axios";

export default function PostCreate() {
  const [title, setTitle] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const result = await axios.post("http://localhost/posts", {
      title,
    });
    console.log(result);
    setTitle("");
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <button className="btn btn-primary">Create</button>
      </form>
    </div>
  );
}
