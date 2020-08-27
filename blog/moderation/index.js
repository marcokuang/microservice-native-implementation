const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

app.post("/events", async (req, res) => {
  const { type, data } = req.body;
  if (type === "CommentCreated") {
    const newStatus = data.comment.includes("orange") ? "rejected" : "approved";
    const { id, postId, comment } = data;
    await axios.post("http://localhost:4005/events", {
      type: "CommentModerated",
      data: {
        id,
        postId,
        comment,
        status: newStatus,
      },
    });
  }
  res.send({});
});

app.listen(4003, () => {
  console.log("Moderation service is listening on port 4003");
});
