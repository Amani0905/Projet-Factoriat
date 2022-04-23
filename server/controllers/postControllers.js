const Post = require("../models/postModel");

//@desc add a new post (Create Many Records )
//@path POST/api/post
//@access PUBLIC
exports.addPost = (req, res) => {
  Post.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "something went wrong" });
    });
};

// @desc get a post (Find all in Database(Find))
// @path GET/api/post
// @access PUBLIC
exports.getPost = (req, res) => {
  Post.find()
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "something went wrong" });
    });
};

//@desc update a post
//@path PUT /api/post
//@access PUBLIC
exports.updatePost = (req, res) => {
  Person.findOneAndUpdate(req.params.id, req.body, { new: true })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "something went wrong" });
    });
};

//@desc delete a post
//@path DELETE/api/post
//@access PUBLIC
exports.deletePost = (req, res) => {
  Person.findByIdAndRemove(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "something went wrong" });
    });
};
