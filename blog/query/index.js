const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// post pool that stores all the posts for the app
const posts = {};

// handles and filters certain types events from event bus
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

// send out all the posts the Query service has so far
app.get("/query/posts", (req, res) => {
  res.send(posts);
});

// This post request listener handles receiving events from event bus
app.post("/events", (req, res) => {
  const { type, data } = req.body;

  handleEvents(type, data);

  res.send({});
});

// when the service starts, it requests all the events from the event bus to set up initial data
app.listen(4004, async () => {
  console.log("Query service is listening on port 4004");
  const result = await axios.get("http://event-bus-srv:4005/events");

  for (let event of result.data) {
    console.log("Query Service -- ", "Processing events", event.type);
    handleEvents(event.type, event.data);
  }
});
