const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

const Post = require('./models/Post');

routes.post('/posts', multer(multerConfig).single('my_file'), async (req, res) => {
  const { originalname: name, size, filename: key } = req.file;
  const post = await Post.create({
    name,
    size,
    key,
    url: ''
  })
  console.log(req.file);
  return res.json(post);
})

module.exports = routes;