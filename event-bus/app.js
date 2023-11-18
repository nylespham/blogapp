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

    axios.post("http://localhost:4100/events", event).catch((err) => {
        console.log(err.message)
    })
    axios.post("http://localhost:4000/events", event).catch((err) => {
        console.log(err.message)
    })
    axios.post("http://localhost:4200/events", event).catch((err) => {
        console.log(err.message)
    })
    axios.post("http://localhost:4400/events", event).catch((err) => {
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