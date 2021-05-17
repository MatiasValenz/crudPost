const express = require("express");
const router = express.Router();

const {
  getPosts,
  createPost,
  deletePost,
} = require("../controllers/postController.js");

router.get("/list", getPosts);
router.post("/create", createPost);
router.delete("/delete/:id", deletePost);

module.exports = router;
