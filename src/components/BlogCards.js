import React from "react";
import { Box, Typography, Button} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";


import blogImage3 from "../assets/entrance_blogs.jpg";
import sectionMid from '../assets/section-img.png';
import { useTranslation } from "react-i18next";
const HeroSection = styled(Box)({
  position: "relative",
  height: "80vh",
  background: `url(${blogImage3}) center/cover no-repeat`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  color: "#fff",
  zIndex: 1,
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.6)", // Dark overlay for better text contrast
    zIndex: -1,
  },
});


const HighlightButton = styled(Button)({
  fontFamily: "var(--font-family)",
  backgroundColor: "var(--primary-color)",
  color: "#fff",
  fontSize: "1.0rem",
  fontWeight: "bold",
  padding: "12px 24px",
  marginTop: "20px",
  borderRadius: "30px",
  "&:hover": {
    backgroundColor: "var(--fourth-color)",
    transform: "scale(1.05)",
    transition: "0.3s ease",
    color:"var(--primary-color)",
  },
});


const BlogSection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  // const blogs = [
  //   {
  //     id: 1,
  //     title: "The Science of Wellness",
  //     description:
  //       "Discover effective ways to maintain your mental and physical well-being through modern medical insights.",
  //     image: blogImage1,
  //   },
  //   {
  //     id: 2,
  //     title: "Understanding Chronic Diseases",
  //     description:
  //       "A comprehensive guide to managing chronic conditions and living a healthier life.",
  //     image: blogImage2,
  //   },
  //   {
  //     id: 3,
  //     title: "Nutrition and Health",
  //     description:
  //       "Explore the impact of nutrition on overall health and well-being with practical tips.",
  //     image: blogImage3,
  //   },
  // ];

  return (

    <Box
    sx={{
      width: "100%",
      marginBottom: "3vh",

      boxShadow: "0px -3px 8px rgba(0, 0, 0, 0.3)", // Top and bottom shadow
      
      fontFamily: "var(--font-family)",
    }}
    >
     

        {/* Hero Section */}
        <HeroSection>
        <img  src={sectionMid} alt="img"></img>
          <Typography
            variant="h2"
            sx={{ fontWeight: "bold", fontFamily: "var(--font-family)", mb: 2,fontSize:{xs:"2.8rem"} }}
          >
            {t('blogHeader')}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize:{xs:"1.0rem",md:"1.2rem"},
              fontFamily: "var(--font-family)",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
           {t('blogSecond')}
          </Typography>
          <HighlightButton onClick={() => navigate("/blogs")}>
          {t('cardButton')}
          </HighlightButton>
        </HeroSection>

        {/* Blog Preview Section */}
        {/* <Box
          sx={{
            padding: "50px 20px",
            backgroundColor: "#f4f6f8",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              fontFamily: "var(--font-family)",
              color: "var(--primary-color)",
              mb: 4,
            }}
          >
            Featured Blogs
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {blogs.map((blog) => (
              <Grid item xs={12} sm={6} md={4} key={blog.id}>
                <BlogCard>
                  <CardMedia
                    component="img"
                    image={blog.image}
                    alt={blog.title}
                    sx={{ height: 200 }}
                  />
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        fontFamily: "var(--font-family)",
                        mb: 1,
                      }}
                    >
                      {blog.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "var(--font-family)",
                        color: "text.secondary",
                        mb: 2,
                      }}
                    >
                      {blog.description.length > 100
                        ? `${blog.description.slice(0, 100)}...`
                        : blog.description}
                    </Typography>
                    <Button
                      variant="outlined"
                      sx={{
                        color: "var(--primary-color)",
                        borderColor: "var(--primary-color)",
                        "&:hover": {
                          backgroundColor: "var(--primary-color)",
                          color: "#fff",
                        },
                      }}
                      onClick={() => navigate("/blogs")}
                    >
                      Read More
                    </Button>
                  </CardContent>
                </BlogCard>
              </Grid>
            ))}
          </Grid>
        </Box> */}
    </Box>
    
  );
};

export default BlogSection;
