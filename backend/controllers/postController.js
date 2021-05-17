const Post = require("../models/Post.js");
const validationPost = require("../helpers/validations.js");

//Method to list
const getPosts = async (req, res) => {
  try {
    const getAllPosts = await Post.findAll();
    return res.status(200).json({
      data: getAllPosts,
    });
  } catch (e) {
    return res.status(400).json({ error: e.message });
  }
};

//Method to create
const createPost = async (req, res) => {
  const { name, description } = req.body;

  try {
    validationPost(req.body);

    const newPost = await Post.create({
      name,
      description,
    });

    return res.status(201).json({
      message: "Post successfully created",
      body: {
        newPost,
      },
    });
  } catch (e) {
    return res
      .status(500)
      .json({ error: "Error creating post", message: e.message });
  }
};

//Method to remove
const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    const findPost = await Post.findOne({ where: { id } });

    if (findPost) {
      await Post.destroy({ where: { id } });

      return res.status(201).json({
        message: "Post deleted successfully",
        body: {
          post: findPost,
        },
      });
    } else {
      return res.status(201).json({
        message: "Post not found",
        body: {
          post: {},
        },
      });
    }
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};

module.exports = {
  getPosts,
  createPost,
  deletePost,
};
