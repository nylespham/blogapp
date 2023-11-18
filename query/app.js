const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const port = 4200;
const app = express();

app.use(bodyParser.json())
app.use(cors())
const posts = {};

const handleEvent = (type, data) => {
    if (type === "PostCreated") {
        const {id,title} = data
        posts[id] = {id, title, comments: []}
    }
    if (type === "CommentCreated") {   
        const {id,content, postId, status} = data
        const post = posts[postId]
        post.comments.push({id, content, status})
    }
    if (type === "CommentUpdated") {
        const {id, content, postId, status} = data
        const post = posts[postId]
        const comment = post.comments.find(comment => {
            return comment.id === id
        })
        comment.status = status
        comment.content = content
    }
}
app.get("/posts", (req, res) => {
    res.send(posts)
})

app.post("/events", (req, res) => {
    console.log(req.body)
    const {type, data} = req.body;

    handleEvent(type,  data);

    console.log(posts)
    res.send({})
})

app.listen(port, async () => {
    console.log(`Server is running on ${port}`);
    try {
        const res = await axios.get("http://localhost:4500/events");

        for (let event of res.data) {
            console.log("Processing event:", event.type);
            handleEvent(event.type, event.data);
        }

    } catch (error) {
        console.log(error.message);
    }
})