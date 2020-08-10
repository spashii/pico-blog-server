const mongoose = require('mongoose');

const PostSchema = require('./PostSchema');

const Post = mongoose.model('Post', PostSchema);

const addPost = async (req, res) => {
  let newPost = new Post(req.body);
  await newPost.save((err, Post) => {
    if (err) {
      res.send(err);
    } else {
      res.json(Post);
    }
  });
};

const getPosts = async (req, res) => {
  await Post.find({}, (err, Post) => {
    if (err) {
      res.send(err);
    } else {
      res.json(Post);
    }
  })
    .sort({ time_created: -1 })
    .exec();
};

module.exports.addPost = addPost;
module.exports.getPosts = getPosts;
