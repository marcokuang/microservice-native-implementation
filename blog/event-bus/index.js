const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const Config = require("./config");

const app = express();
app.use(bodyParser.json());

// Event data store
const events = [];

app.post("/events", (req, res) => {
  const event = req.body;
  try {
    // post service
    events.push(event);
    axios.post(Config.POST, event);
    // comment service
    axios.post(Config.COMMENT, event);
    // moderation Service
    axios.post(Config.MODERATION, event);
    // query Service
    axios.post(Config.QUERY, event);
    console.log(event);
    res.send({ status: "OK" });
  } catch (err) {
    console.log(err);
  }
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log("version 1: initial commit");
  console.log(">>>Listening on port 4005");
});
