const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog'); // Assuming your Blog model is defined in a separate file

// Route to handle creating multiple blog posts
router.post('/createblogs', async (req, res) => {
  try {
    console.log("Inside Craete BLOGS")
    const blogsData = req.body;

    // Assuming blogsData is an array of blog objects
    const createdBlogs = await Blog.insertMany(blogsData);

    res.status(201).json({ msg: "Blogs created successfully", blogs: createdBlogs });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Some unexpected error occurred" });
  }
});

// Additional routes for other functionalities can be added here if needed

module.exports = router;
