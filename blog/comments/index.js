const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
// get randomBytes to generate ids
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");
const axios = require("axios");
const app = express();
app.use(cors());
app.use(helmet());
app.use(morgan("tiny"));
app.use(bodyParser.json());

const commentsByPostIds = {};

app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostIds[req.params.id] || []);
});

app.post("/posts/:id/comments", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const postId = req.params.id;
  const { comment } = req.body;
  const comments = commentsByPostIds[postId] || [];
  comments.push({
    id,
    comment,
    status: "pending",
  });

  commentsByPostIds[postId] = comments;

  await axios.post("http://localhost:4005/events", {
    type: "CommentCreated",
    data: {
      id,
      comment,
      postId,
      status: "pending",
    },
  });
  res.status(201).send({ id, comment });
});
app.post("/events", (req, res) => {
  const { type } = req.body;
  console.log(`Event <${type}> received`);
  res.send({});
});
app.listen(4001, () => {
  console.log("Comment Service - port: 4001");
});
