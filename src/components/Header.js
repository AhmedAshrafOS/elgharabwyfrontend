import * as React from "react";

import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link,useNavigate, useLocation } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";
import logo from "../assets/main_logo.png";
import {  styled } from "@mui/system";
import { useTranslation } from "react-i18next";


import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
} from "@mui/material";



const pages = [
  { 1: "home", 2: "/" },
  { 1: "services", 2: "#services-section" },
  { 1: "blogs", 2: "/blogs" },
  { 1: "aboutUs", 2: "#aboutus-section" },
];

const CustomButton = styled(Button)({
  color: "var(--buttons-text-color)",
  textTransform: "uppercase",
  textAlign: "center",
  backgroundColor: "var(--buttons-color)",
  position: "relative",
  padding: "1em 2em",
  overflow: "hidden",
  fontFamily: "var(--font-family)",
  zIndex: 0,
  "&:before": {
    zIndex: -1,
    position: "absolute",
    top: 0,
    left: "-100%",
    width: "50%",
    height: "100%",
    content: '""',
    background: "var(--buttons-hover-color)",
    color: "var(--buttons-text-hover-color)",
    transition: "0.3s ease-in",
  },
  "&:hover:before": {
    left: 0,
    transition: "0.5s ease-out",
  },
  "&:after": {
    zIndex: -1,
    position: "absolute",
    top: 0,
    left: "200%",
    width: "50%",
    height: "100%",
    content: '""',
    background: "var(--buttons-hover-color)",
    color: "var(--buttons-text-hover-color)",
    transition: "0.3s ease-in",
  },
  "&:hover:after": {
    left: "50%",
    transition: "0.5s ease-out",
  },
  "&:hover": {
    color: "var(--buttons-text-hover-color)",
  },
});
const CustomButtonTwo = styled(Button)({
  color: "var(--buttons-text-color)",
  textAlign: "center",
  backgroundColor: "var(--buttons-color)",
  position: "relative",

  padding: "1vw 2vw",
  fontSize:".6rem",
  overflow: "hidden",
  fontFamily: "var(--font-family)",
  

});

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const scrollToSection = (id) => {
    const handleScroll = () => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };

    if (location.pathname !== "/") {
      navigate("/", { replace: true });
      // Delay scrolling to allow time for navigation
      setTimeout(() => handleScroll(), 100); // Adjust delay as needed
    } else {
      handleScroll();
    }
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleBookingRedirect = () => {
    navigate("/booking-appointment"); // Redirect to the BookingAppointment component
  };
  const handleHomeRedirect = () => {
    navigate("/"); 
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Box
        sx={{ backgroundColor: "var(--third-color)", color: "var(--primary-color)" }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{ direction: "ltr" }}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box display="flex" gap={2}>
              <ReactCountryFlag
                svg
                style={{
                  width: "1.5em",
                  height: "1.5em",
                }}
                title="US"
                countryCode={i18n.language === "en" ? "EG" : "US"}
              />
              <Link
                component={Link}
                onClick={toggleLanguage}
                style={{ 
                  fontFamily:"Cairo",fontWeight:600 ,                 
                  underline: "none",
                  textDecoration: "none",
                  color: "inherit",
                  cursor: "pointer",}}

              >
                {i18n.language === "en" ? "العربية" : "English"}
              </Link>

              <Link
                href="#"
                color="inherit"
                style={{fontFamily:"Cairo",fontWeight:600  , color: "inherit",textDecoration: "none",underline:"none"}}
              
              >
                FAQ
              </Link>
            </Box>
            <Box display="flex" gap={2}>
              <Typography  variant="body2" sx={{fontFamily:"Cairo",fontWeight:600 }}>
                <i className="fa fa-phone" /> +880 1234 56789
              </Typography>
              <Typography
                sx={{ display: { xs: "none", md: "block" } }}
                variant="body2"
              >
                <i className="fa fa-envelope" />{" "}
                <Link
                  href="mailto:support@yourmail.com"
                  color="inherit"
                  style={{ fontFamily:"Cairo",fontWeight:600 ,textDecoration: "none",underline:"none", color: "inherit"}}
                >
                  support@yourmail.com
                </Link>
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      <AppBar
        sx={{
          backgroundColor: "var(--primary-color)",
        }}
        position="static"
      >
        <Container>
          <Toolbar disableGutters>
            {/* SwitchButton */}
            <Box sx={{ width: "15%" }}></Box>

            {/* Responsive Menu */}


            <Box
              sx={{
                width: "40%",
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                marginRight: "0px",
              
              }}
            >
              <IconButton
                sx={{
                  color:"var(--second-color)"
                }}
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="var(--background)"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none"} }}
              >
                {pages.map((page) => (
                  <MenuItem
                  component={page[2].startsWith("#") ? "button" : Link} // Use "button" to avoid navigation for hash links
                  to={!page[2].startsWith("#") ? page[2] : undefined} // Only provide 'to' for non-hash links
                  key={page[1]}
                  onClick={() => {
                    handleCloseNavMenu();
                    if (page[2].startsWith("#")) {
                      const id = page[2].split("#")[1]; // Extract the ID after '#'
                      scrollToSection(id); // Scroll to the section by passing the extracted ID
                    }
                  }}
                  >
                    <Typography sx={{ textAlign: "center" }}>
                      {t(page[1])}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>


            </Box>
            <Box
              sx={{
              
                display: { xs: "block", md: "none" },
                width: "60%",
                color: "var(--background)",
               
              }}
            >
               <img

                src={logo}
                  alt="Logo"
                  style={{
                    cursor:"pointer",
                    height: "100px",
                    width: "auto",
                    transition: "transform 0.2s, opacity 0.2s", // Adds smooth animation effects
                  }}
                  onClick={handleHomeRedirect}
                  onMouseDown={(e) => (e.target.style.opacity = 0.7)} // Dim image when clicked
                  onMouseUp={(e) => (e.target.style.opacity = 1)} // Restore opacity on release
                  onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")} // Slight zoom on hover
                  onMouseOut={(e) => (e.target.style.transform = "scale(1)")} 
                />
            </Box>
            <Box sx={{
                 width: "20%",
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
      
                
              }}>
                <CustomButtonTwo onClick={handleBookingRedirect} >{t("bookSmall")}</CustomButtonTwo>
            </Box>
            {/*  Middle Nav*/}
            <Box
              sx={{
                flexGrow: 1,

                display: { xs: "none", md: "flex" },
                maxWidth: "70%",
                justifyContent: "space-between",

                alignItems: "center", // centers vertically
              }}
            >
              <Box
                component="a"
                
                sx={{
                  marginTop: "3px",
                }}
              >
                <img

                  src={logo}
                    alt="Logo"
                    style={{
                      cursor:"pointer",
                      height: "150px",
                      width: "auto",
                      transition: "transform 0.2s, opacity 0.2s", // Adds smooth animation effects
                    }}
                    onClick={handleHomeRedirect}
                    onMouseDown={(e) => (e.target.style.opacity = 0.7)} // Dim image when clicked
                    onMouseUp={(e) => (e.target.style.opacity = 1)} // Restore opacity on release
                    onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")} // Slight zoom on hover
                    onMouseOut={(e) => (e.target.style.transform = "scale(1)")} 
                />
              </Box>

              {pages.map((page) => (
                <Button
                component={page[2].startsWith("#") ? "button" : Link} // Use "button" to avoid navigation for hash links
                to={!page[2].startsWith("#") ? page[2] : undefined} // Only provide 'to' for non-hash links
                key={page[1]}
                onClick={() => {
                  handleCloseNavMenu();
                  if (page[2].startsWith("#")) {
                    const id = page[2].split("#")[1]; // Extract the ID after '#'
                    scrollToSection(id); // Scroll to the section by passing the extracted ID
                  }
                }}
                  sx={{
                    textTransform: "none",
                    fontSize: "15px",
                    fontFamily: "var(--font-family)",
                    color: "var(--text-third-color)",
                    marginRight: "10px",
                    my: 2,
                    position: "relative",
                    transition: "color 0.3s ease, transform 0.3s ease", // Transition for text color and slight scale

                    "&:hover": {
                      color: "var(--second-color)",
                      transform: "scale(1.05)", // Slight zoom effect on hover
                    },

                    "&::before": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "0%",
                      height: "3px",
                      backgroundColor: "var(--second-color)",
                      borderRadius: "5px 5px 0 0",
                      transition: "width 0.3s ease", // Smooth transition for the underline
                    },

                    "&:hover::before": {
                      width: "100%", // Expands underline on hover
                    },
                  }}
                >
                  {t(page[1])}
                </Button>
              ))}
              <CustomButton onClick={handleBookingRedirect} >{t("book")}</CustomButton>
            </Box>
            <Box sx={{ width: "15%" }}></Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default ResponsiveAppBar;
