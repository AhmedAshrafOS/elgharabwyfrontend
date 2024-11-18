
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, CardActions, Typography, Button, Box } from '@mui/material';
import DOMPurify from 'dompurify';
const ViewBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('https://content-reprieve-production.up.railway.app/api/blog');
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  // Function to delete a blog by ID
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://content-reprieve-production.up.railway.app/api/blog/${id}`);
      setBlogs(blogs.filter((blog) => blog.id !== id)); // Update state after deletion
      alert("Blog deleted successfully!");
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert("Failed to delete blog");
    }
  };

  // const handleUpdate = async (id) => {
  //   const updatedBlog = {
  //     title: "Updated Title", // Replace with actual updated title
  //     coverImageUrl: "https://example.com/updated-cover.jpg", // Replace with updated cover image URL
  //     sections: [
  //       { heading: "Updated Section", body: "<p>Updated content</p>", type: "text" }
  //     ],
  //   };

  //   try {
  //     const response = await axios.put(`https://content-reprieve-production.up.railway.app/api/blog/${id}`, updatedBlog);
  //     setBlogs(blogs.map((blog) => (blog.id === id ? response.data : blog))); // Update state with modified blog
  //     alert("Blog updated successfully!");
  //   } catch (error) {
  //     console.error("Error updating blog:", error);
  //     alert("Failed to update blog");
  //   }
  // };

  return (
    <Box py={4} display="flex" flexDirection="column" alignItems="center" bgcolor="#1E2A38" color="#fff">
      {blogs.map((blog) => (
        <Box key={blog.id} sx={{ marginBottom: 3, display: 'flex', justifyContent: 'center', width: '100%' }}>
          <Card
            sx={{
              width: { xs: '100%', sm: '80%', md: '60%' },
              backgroundColor: '#263447', // Dark background for consistency
              borderRadius: 2,
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
              padding: 2,
              color: '#fff',
            }}
          >
            <CardContent>
              <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold', color: '#00ACC1' }}>
                {blog.title}
              </Typography>
              <Typography variant="body2" sx={{ color: '#b0bec5', mt: 1 }}>
              <p 
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(blog.sections[0]?.body.substring(0,100) || 'Blog content preview...'),
                        }}
                      />
                      
              </Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              {/* <Button
                variant="outlined"
                onClick={() => handleUpdate(blog.id)}
                sx={{
                  color: '#00ACC1',
                  borderColor: '#00ACC1',
                  mr: 2,
                  '&:hover': {
                    backgroundColor: '#00ACC1',
                    color: '#1E2A38',
                  },
                }}
              >
                Update
              </Button> */}
              <Button
                variant="outlined"
                color="error"
                onClick={() => handleDelete(blog.id)}
                sx={{
                  color: '#f44336',
                  borderColor: '#f44336',
                  '&:hover': {
                    backgroundColor: '#f44336',
                    color: '#fff',
                  },
                }}
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        </Box>
      ))}
    </Box>
  );
};

export default ViewBlogs;
