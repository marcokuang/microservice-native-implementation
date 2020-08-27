const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.post("/events", (req, res) => {
  const event = req.body;
  // post service
  axios.post("http://localhost:4000/events", event);
  // comment service
  axios.post("http://localhost:4001/events", event);
  // moderation Service
  axios.post("http://localhost:4003/events", event);
  // query Service
  axios.post("http://localhost:4004/events", event);
  console.log(event);
  res.send({ status: "OK" });
});

app.listen(4005, () => {
  console.log("Listening on port 4005");
});
