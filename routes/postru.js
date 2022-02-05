const express = require("express");
const router = express.Router();
const Postru = require("../models/PostRu")

// create post 
router.post("/", async (req, res) => {
    const newPost = new Postru(req.body)
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost)
    } catch (error) {
        res.status(500).json(error)
    }
})

// update post
router.put("/:id", async (req, res) => {
    try {
        const post = await Postru.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                const updatePost = await Postru.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set: req.body
                    },
                    {
                        new: true
                    }
                )
                res.status(200).json(updatePost)
            } catch (error) {
                res.status(500).json(error)
            }
        } else {
            res.status(401).status("siz bu po'stni yozmagansiz")
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

// delete post
router.delete("/:id", async( req, res) => {
    try {
        const post = await Postru.findById(req.params.id)
        if (post.username === req.body.username) {
            try {
                await post.delete()
                res.status(200).json("sizning postingiz o'chdi")
            } catch (error) {
                res.status(500).json(error)
            }
        } else {
            res.status(401).json("sizning postingiz o'chmadi")
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

// get post 
router.get("/:id", async (req, res) => {
    try {
        const post = await Postru.findById(req.params.id)
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error)
    }
})

// get all posts
router.get("/", async (req, res) => {
    let posts;
    try {
        posts = await Postru.find()
        res.status(200).json(posts) 
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router