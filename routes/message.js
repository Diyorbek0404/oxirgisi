const express = require("express")
const router = express.Router();
const Message = require("../models/Message")

// create post 
router.post("/", async (req, res) => {
    const newPost = new Message(req.body)
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost)
    } catch (error) {
        res.status(500).json(error)
    }
})

// get post 
router.get("/:id", async (req, res) => {
    try {
        const post = await Message.findById(req.params.id)
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error)
    }
})

// get all posts
router.get("/", async (req, res) => {
    let posts;
    try {
        posts = await Message.find()
        res.status(200).json(posts) 
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router