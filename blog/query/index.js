const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};
function handleEvents(type, data) {
  if (type === "PostCreated") {
    const { id, title } = data;
    posts[id] = { id, title, comments: [] };
  }

  if (type === "CommentCreated") {
    const { id, postId, comment, status } = data;
    posts[postId].comments.push({ id, comment, status });
  }

  if (type === "CommentUpdated") {
    const { id, postId, comment, status } = data;
    const post = posts[postId];
    const foundComment = post.comments.find((item) => {
      return item.id === id;
    });
    foundComment.comment = comment;
    foundComment.status = status;
  }
}
app.get("/query/posts", (req, res) => {
  res.send(posts);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  handleEvents(type, data);

  res.send({});
});

app.listen(4004, async () => {
  console.log("Query service is listening on port 4004");
  const result = await axios.get("http://event-bus-srv:4005/events");

  for (let event of result.data) {
    console.log("Processing events", event.type);
    handleEvents(event.type, event.data);
  }
});
