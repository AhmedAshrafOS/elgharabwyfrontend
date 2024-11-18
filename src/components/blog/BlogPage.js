import React, { useState ,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import { Pagination, Box, Card,CardMedia, Typography } from '@mui/material';
import sectionMid from   '../../assets/section-img.png'
import { useTranslation } from "react-i18next";
import DOMPurify from 'dompurify';


const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogs, setBlogs] = useState([]);

  const blogsPerPage = 12;
  const { t } = useTranslation();


  useEffect(() => {
 
    const fetchBlogs = async () => {
      try {



        const response = await fetch('https://content-reprieve-production.up.railway.app/api/blog'); // Adjust URL if needed
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const data = await response.json();
        setBlogs(data); // Update the blogs state with data from the API
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  // Calculate total pages based on blog count
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  // Get blogs for the current page
  const getCurrentPageBlogs = () => {
    const startIndex = (currentPage - 1) * blogsPerPage;
    const endIndex = startIndex + blogsPerPage;
    return blogs.slice(startIndex, endIndex);
  };

  const handlePageChange = (_, value) => {
    setCurrentPage(value);
  };

  return (
    <div >

      <Header />
      
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" p={3}>
      <Box sx={{display:'flex', flexDirection:"column", justifyContent:"center", alignContent:"center" ,alignItems:"center"}}>
        <Typography   sx={{ fontSize:{xs:"3rem",md:"3rem"}, textAlign:"center" ,color :"var(--text-second-color)"}} gutterBottom>{t("blogHeader")}</Typography>    
         <img src={sectionMid} alt="img"></img>
        <Typography sx={{ fontSize:{xs:"1.1rem",md:"1.1rem"}, textAlign:"center" ,color :"var(--text-second-color)"}} gutterBottom>{t("blogSecond")}</Typography>
      </Box>

      <Box sx={{width:{xs:"100%",sm:"100%",md:"85%"}}} display="flex" justifyContent="center" alignItems="center" flexDirection="column" p={3}>
        <Box
        
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
    
          sx={{boxShadow:0,}}
          gap={2}
        >
          {getCurrentPageBlogs().map((blog) => (
            <Card
            
                key={blog.id}
                component={Link} // Makes the whole card clickable
                to={`/blog/${blog.id}`}
                state={{ data: blog }}
              
                sx={{
                  minWidth:"20vw",
                  maxWidth:{xs:"480px",sm:"480px",md:"290px",lg:"280px"},

                  textDecoration: 'none', // Removes underline from the Link
                  boxShadow: 0,

                  flex: '1 1 320px',
                  padding: 0,

                }}
            >
                <Box
                  sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover .overlay': {
                      opacity: 1, // Orange overlay will appear on hover
                    },
                  }}
                >
                  <CardMedia
                    sx={{
                      borderRadius:"0.4rem",
                      height: 160,
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease', 
                      transform: 'scale(1)', 
                      '&:hover': {
                        transform: 'scale(1.05)', // Slight zoom on hover
                      },
                    }}
                    component="img"
                    image={blog.coverImageUrl}
                    alt="Blog image"
                  />
                  <Box
                    className="overlay"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      bgcolor: 'rgba(160, 249, 255, 0.342)', // Orange with transparency
                      opacity: 0,
                      transition: 'opacity 0.3s ease', // Smooth fade-in effect
                    }}
                  />
                  </Box>
                  <Typography variant="h6" fontFamily={"var(--font-family)"}>{blog.title}</Typography>
 

                  <Typography
                  
                    sx={{
                      fontFamily: "var(--font-family)",
                      textDecoration: 'none',
                      color: 'black',
                   
                      display: '-webkit-box',           // Enables truncating after a set number of lines
                      WebkitLineClamp: 3,               // Limits the text to 3 lines (approximating 3 sentences)
                      WebkitBoxOrient: 'vertical',      // Vertical box orientation for multiline ellipsis
                      overflow: 'hidden',               // Hides overflowing text
                      textOverflow: 'ellipsis',            // Ensures the ellipsis is applied within the container width
                    }}
                  >
                    <p
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(blog.sections[0]?.body|| 'Blog content preview...'),
                        }}
                      />
                  
                  </Typography>
                  <Typography
                    variant="body2"
                    fontSize={'.7rem'}
                    fontWeight={600}
                  >
              
              {new Date(blog.date).toLocaleDateString("en-US", {
                  month: "short", // "Mar"
                  day: "numeric", // "4"
                  year: "numeric" // "2024"
                })}
                  </Typography>
            </Card>
          ))}
        </Box>

      </Box>

        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          sx={{ mt: 4 }}
        />
      </Box>

      <Footer />
    </div>
  );
};

export default BlogPage;
