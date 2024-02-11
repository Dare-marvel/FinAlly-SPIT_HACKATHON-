import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';
import Footer from '../components/Footer';
async function createDummyBlog(blogs) {
    alert("Inside Create Dummy Blog")
    try {
        const response = await axios.post('/createblogs', blogs);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('/getblogs'); // Assuming your backend API endpoint for fetching blogs is /blogs
                setBlogs(response.data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchBlogs();
    }, []);

    const BlogModal = styled('div')(({ theme }) => ({
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        maxWidth: '90vw', // Adjust the width as needed
        maxHeight: '80vh', // Adjust the height as needed
        overflowY: 'auto', // Enable vertical scrolling
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        textAlign: 'center', // Align contents at the center
    }));

    const [open, setOpen] = useState(false);
    const [blog, setBlog] = useState({});

    const handleOpen = (e) => {
        e.preventDefault(); // Prevent the default behavior (page refresh)
        const blogId = e.target.href.split('/').pop();
        const selectedBlog = blogs.find(blog => blog._id === blogId);
        setBlog(selectedBlog);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div style={{
                padding: "2rem",
                backgroundColor: ""
            }}>
            <Grid container spacing={4}>
                {blogs.map(blog => (
                    <Grid item xs={12} sm={6} md={4} key={blog._id}>
                        <Card style={{
                            borderRadius: "20px",
                            backgroundColor: "rgb(232, 238, 244)"
                        }}>
                            <CardContent>
                                <Typography variant="h6" component="h2" style={{
                                    margin: "1em"
                                }}>{blog.title}</Typography>
                                <Typography variant="body2" color="textSecondary" component="p" style={{
                                    margin: "1em"
                                }}>
                                    {blog.content.substring(0, 100)}...
                                </Typography>
                                <Button variant="contained" color="primary" href={`/blog/${blog._id}`} onClick={handleOpen} style={{
                                    margin: "1em"
                                }}>Read More</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <BlogModal style={{
                    padding: "3rem",
                }}>
                    <h2 id="modal-modal-title" style={{
                        margin: "0 0 2rem 0"
                    }}>{blog.title}</h2>
                    {blog.youtubeLink && (
                        <iframe
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${blog.youtubeLink.split('=')[1]}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    )}
                    <div style={{
                        padding: "2em 0",
                        textAlign: "justify"
                    }}>{blog.content}</div>
                </BlogModal>
            </Modal>
            <br></br>
            <Footer/>
        </>
    );
};

export default Blogs;
