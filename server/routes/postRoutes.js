const express = require("express");
const {
  addPost,
  getPost,
  updatePost,
  deletePost,
} = require("../controllers/postControllers");
const router = express.Router();


router.post("/", addPost);
router.get("/", getPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;
