const express = require("express");
const {
  addPost,
  getPost,
  updatePost,
  deletePost,
} = require("../controllers/postControllers");
const router = express.Router();
const Post = require("../models/postModel");

router.post("/", addPost);
router.get("/", getPost);
router.put("/", updatePost);
router.delete("/", deletePost);
module.exports = router;
