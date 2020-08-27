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

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;
  posts[id] = {
    id,
    title,
  };
  await axios.post("http://localhost:4005/events", {
    type: "PostCreated",
    data: {
      id,
      title,
    },
  });
  res.status(201).send(posts[id]);
});

app.listen(4000, () => {
  console.log("Post Service - port: 4000");
});
