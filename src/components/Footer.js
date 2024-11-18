import React from "react";
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, IconButton, Link } from "@mui/material";
import { styled } from "@mui/system";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import logo from "../assets/main_logo.png";
import { useTranslation } from "react-i18next";

const HoverListItem = styled(ListItem)({
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateX(8px)",
  },
});

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ backgroundColor: "var(--footer-color)" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",

        }}
      >
        {/* Top Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection:{xs:"column",md:"row"},
            justifyContent: "space-between",
            
            gap: 3,
            width: "80%",
          }}
        >
          {/* Logo and Description */}
          <Box sx={{ textAlign: "center" }}>
            <img src={logo} alt="Logo" width="200px" />
            <Typography
              variant="body1"
              sx={{
                fontFamily: "var(--font-family)",
                color: "var(--text-second-color)",
                mt: 2,
                maxWidth: "250px",
                margin: "0 auto",
              }}
            >
              {t("footerText")}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
              <IconButton sx={{ color: "#4267B2" }}>
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{ color: "#1DA1F2", mx: 1 }}>
                <TwitterIcon />
              </IconButton>
              <IconButton sx={{ color: "#E1306C" }}>
                <InstagramIcon />
              </IconButton>
            </Box>
          </Box>

          {/* Links Section */}
          <Box sx={{justifyContent:"center", alignContent:"center", textAlign: "center" }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "600", fontFamily: "var(--font-family)", mb: 2 }}
            >
              {t("links")}
            </Typography>
            <List>
              <HoverListItem>
                <ListItemIcon>
                  <ChevronRightIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Link
                      to="/"
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontFamily: "var(--font-family)",
                      }}
                    >
                      {t("home")}
                    </Link>
                  }
                />
              </HoverListItem>
              <HoverListItem>
                <ListItemIcon>
                  <ChevronRightIcon />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography style={{ fontFamily: "var(--font-family)" }}>{t("aboutUs")}</Typography>}
                />
              </HoverListItem>
              <HoverListItem>
                <ListItemIcon>
                  <ChevronRightIcon />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography style={{ fontFamily: "var(--font-family)" }}>{t("services")}</Typography>}
                />
              </HoverListItem>
              <HoverListItem>
                <ListItemIcon>
                  <ChevronRightIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Link
                      to="/blogs"
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontFamily: "var(--font-family)",
                      }}
                    >
                      {t("blogs")}
                    </Link>
                  }
                />
              </HoverListItem>
            </List>
          </Box>

          {/* Opening Hours Section */}
          <Box sx={{  justifyContent:"center", alignContent:"center", textAlign: "center"}}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "600", fontFamily: "var(--font-family)", mb: 2 }}
            >
              {t("openHours")}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "var(--font-family)",
                color: "var(--text-second-color)",
                mb: 2,
              }}
            >
              {t("openHoursDetail")}
            </Typography>
            <List>
              <HoverListItem sx={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                <Typography
                      sx={{
                        fontFamily: "var(--font-family)",
                        fontWeight: "500",
                       
                      }}
                    >
                      {t("firstHour")}
                    </Typography>
                <Typography sx={{ fontFamily: "var(--font-family)", color: "var(--primary-color)" }}>
                  8.00-20.00
                </Typography>
              </HoverListItem>
              <HoverListItem sx={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
         
                    <Typography
                      sx={{
                        fontFamily: "var(--font-family)",
                        fontWeight: "500",
                      }}
                    >
                      {t("secondHour")}
                    </Typography>
 
                <Typography sx={{ fontFamily: "var(--font-family)", color: "var(--primary-color)" }}>
                  9.00-18.30
                </Typography>
              </HoverListItem>
              <HoverListItem sx={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>

                    <Typography
                      sx={{
                        fontFamily: "var(--font-family)",
                        fontWeight: "500",
                      }}
                    >
                      {t("thirdHour")}
                    </Typography>

                <Typography sx={{ fontFamily: "var(--font-family)", color: "var(--primary-color)" }}>
                  9.00-15.00
                </Typography>
              </HoverListItem>
            </List>
          </Box>
        </Box>

        {/* Bottom Section */}
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            fontFamily: "var(--font-family)",
            color: "var(--text-second-color)",
            mt: 3,
          }}
        >
          &copy; ElGharabwy Clinic, 2024. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
