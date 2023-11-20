const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const port = 4500;
const app = express();
app.use(bodyParser.json());

const events = [];

app.post("/events", (req, res) => {
    const event = req.body;
    console.log(event);

    events.push(event);

    axios.post("http://comments-svc:4100", event).catch((err) => {
        console.log(err.message)
    })
    axios.post("http://post-svc:4000", event).catch((err) => {
        console.log(err.message)
    })
    axios.post("http://query-svc:4200", event).catch((err) => {
        console.log(err.message)
    })
    axios.post("http://moderation-svc:4400", event).catch((err) => {
        console.log(err.message)
    })
    res.send({status: "OK"})
})

app.get("/events", (req, res) => {
    res.send(events);
});

app.listen(port,() => {
    console.log(`Server is running on ${port}`);
});