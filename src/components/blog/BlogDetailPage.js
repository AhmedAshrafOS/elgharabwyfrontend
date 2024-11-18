import React from "react";
import { Box, Typography, Link, CardMedia } from "@mui/material";
import { useLocation, Link as RouterLink } from "react-router-dom";
import DOMPurify from "dompurify";
import Header from "../Header";
import Footer from "../Footer";

const BlogContentPage = () => {
  const location = useLocation();
  const blogPost = location.state?.data; // Get blog data passed from the previous page
  const date = new Date(blogPost?.date?.$date || blogPost?.date);
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short", // "Mar"
    day: "numeric", // "4"
    year: "numeric", // "2024"
  });

  return (
    <div>
      <Header />
      <Box
        width={"100vw"}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        
        p={{xs:0,md:2}}
      >
        {/* All Blogs / Blog Title */}
        <Box sx={{ width: { xs: "90%", sm: "85%", md: "70%" } }}>
          <Box alignSelf={"flex-start"} mb={2}>
            <Link
              component={RouterLink}
              to="/blogs"
              sx={{
                fontFamily: "Changa",
                fontWeight: 400,
                textDecoration: "none",
                color: "primary.main",
              }}
            >
              All Blogs
            </Link>
            <Typography
              component="span"
              ml={2}
              sx={{ fontFamily: "Noto Sans Arabic", fontWeight: 500 }}
            >
              / {blogPost?.title}
            </Typography>
          </Box>
          <Typography
            variant="h4"
            component="span"
            ml={2}
            sx={{
              fontFamily: "Changa",
              fontWeight: 600,
              letterSpacing: "-1px",
              fontSize: { xs: "1.5rem", md: "2.5rem" }, // Responsive font size
            }}
          >
            {blogPost?.title}
          </Typography>
          <Typography
            display={"block"}
            component="span"
            ml={2}
            sx={{
              fontFamily: "var(--font-family)",
              color: "var(--primary-color)",
              fontWeight: 400,
              fontSize: { xs: "0.9rem", md: "1rem" }, // Responsive font size
              mt: { xs: 1, md: 2 }, // Add spacing based on screen size
            }}
          >
            {formattedDate}
          </Typography>
          {/* Cover Image */}
          {blogPost?.coverImageUrl && (
            <CardMedia
              sx={{
                borderRadius: "0.4rem",
                height: { xs: 200, md: 380 }, // Responsive height
                objectFit: "cover",
                mt: { xs: 2, md: 3 }, // Add spacing for better layout
              }}
              component="img"
              src={blogPost.coverImageUrl}
              alt="Blog image"
            />
          )}

          {/* Blog Sections */}
          {blogPost?.sections.map((section, index) => (
            <Box key={index} mb={3}>
              {section.type === "text" && (
                <Box mb={2}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      mb: 2,
                      fontSize: { xs: "1.2rem", md: "1.5rem" }, // Responsive font size
                    }}
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(section.heading),
                      }}
                    />
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "0.9rem", md: "1rem" }, // Responsive font size
                      lineHeight: { xs: 1.6, md: 1.8 }, // Line height for better readability
                    }}
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(section.body),
                      }}
                    />
                  </Typography>
                </Box>
              )}
              {section.type === "image" && section.mediaUrl && (
                <CardMedia
                  sx={{
                    borderRadius: "0.4rem",
                    height: { xs: 200, md: 400 }, // Responsive height
                    objectFit: "contain",
                    mb: 2,
                  }}
                  component="img"
                  src={section.mediaUrl}
                  alt={section.heading || "Blog image"}
                />
              )}
              {section.type === "video" && section.mediaUrl && (
                <Box
                  component="iframe"
                  src={section.mediaUrl}
                  title={section.heading || "Video"}
                  allowFullScreen
                  sx={{
                    width: "100%",
                    height: { xs: "200px", md: "400px" }, // Responsive height
                    border: "none",
                    borderRadius: "0.4rem",
                    mb: 2,
                  }}
                />
              )}
            </Box>
          ))}
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default BlogContentPage;
