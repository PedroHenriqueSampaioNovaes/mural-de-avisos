const express = require('express');
const posts = require('../model/posts');
const cors = require('cors');
const router = express.Router();

router.use(cors());

router.get('/all', (req, res) => {
  res.json(JSON.stringify(posts.getAll()));
});

router.post('/new', express.json(), (req, res) => {
  const title = req.body.title;
  const description = req.body.description;

  posts.newPost(title, description);

  res.send('Post adicionado');
});

module.exports = router;
