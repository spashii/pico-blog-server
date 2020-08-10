const express = require('express')

const PostController = require('./PostController')

const router = express.Router()

router.route('/')
  .get(PostController.getPosts)
  .post(PostController.addPost)

module.exports = router;
