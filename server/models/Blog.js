const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  youtubeLink: {
    type: String,
  },
  content: {
    type: String,
  }
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
