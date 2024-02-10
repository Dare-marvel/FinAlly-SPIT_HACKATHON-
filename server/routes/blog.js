const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog'); // Assuming your Blog model is defined in a separate file

router.post('/blogs', async (req, res) => {
  try {
    const { title, youtubeLink, content } = req.body;

    if (!title || !youtubeLink || !content) {
      return res.status(422).json({ msg: "All fields need to be filled" });
    }

    const blogExist = await Blog.findOne({ title });
    if (blogExist) {
      return res.status(409).json({ msg: "Blog with this title already exists" });
    }

    const blog = new Blog({ title, youtubeLink, content });
    await blog.save();

    res.status(201).json({ msg: "Blog created successfully", blog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Some unexpected error occurred" });
  }
});

// Additional routes for authentication and authorization can be added here if needed

module.exports = router;
