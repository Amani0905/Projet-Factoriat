const express = require("express");
const {
  addPost,
  getPost,
  updatePost,
  deletePost,
} = require("../controllers/postControllers");
const router = express.Router();
const Post = require("../models/postModel");

router.post("/admin/post", addPost);
router.get("/admin/get", getPost);
router.put("/admin/put", updatePost);
router.delete("/admin/delete", deletePost);
module.exports = router;
