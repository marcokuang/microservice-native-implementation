const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
// get randomBytes to generate ids
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(helmet());
app.use(morgan("tiny"));
app.use(bodyParser.json());

const commentsByPostIds = {};

app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostIds[req.params.id] || []);
});

app.post("/posts/:id/comments", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const postId = req.params.id;
  const { comment } = req.body;
  const comments = commentsByPostIds[postId] || [];
  comments.push({
    id,
    comment,
  });

  commentsByPostIds[postId] = comments;
  res.status(201).send({ id, comment });
});

app.listen(4001, () => {
  console.log("Post Service - port: 4001");
});
