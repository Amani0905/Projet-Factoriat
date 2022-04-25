const express = require("express");
const {
  addPost,
  getPost,
  updatePost,
  deletePost,
} = require("../controllers/postControllers");
const router = express.Router();

<<<<<<< Updated upstream
router.post("/admin/post", addPost);
router.get("/admin/get", getPost);
router.put("/admin/put", updatePost);
router.delete("/admin/delete", deletePost);
=======
router.post("/", addPost);
router.get("/", getPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
>>>>>>> Stashed changes
module.exports = router;
