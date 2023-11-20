const express = require("express");
const axios = require("axios")
const bodyParser = require("body-parser")

const port = 4400;
const app = express();

app.use(bodyParser.json())

app.post("/events", async (req, res) => {
    const {type, data} = req.body;
    if (type === "CommentCreated") {
        const status = data.content.includes("orange") ? "rejected" : "approved";
        await axios.post("http://event-bus-svc:4500", {
            type: "CommentModerated",
            data: {
                id: data.id,
                postId: data.postId,
                status,
                content: data.content
            }
        })
    }
    res.send({})
})

app.listen(port, () => {
    console.log(`Server in running on ${port}`);
})