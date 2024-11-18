import * as React from "react";


import {
  Box,
  Typography,
  Button
} from "@mui/material";


import docotorPhoto from "../assets/doctor_photo.jpg";
import { useTranslation } from "react-i18next";
import { Container, styled } from '@mui/system';
import { useNavigate } from "react-router-dom";

// Styled components using Material-UI's styled API



const Image = styled('img')({
  width: '400px',
  borderRadius: '12px',
  height: 'auto',
});




const AboutUs = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleBookingRedirect = () => {
    navigate("/booking-appointment"); // Redirect to the BookingAppointment component
  };
  return (
  

    <Container id="aboutus-section"   sx={{textAlign:"center",display:"flex", flexDirection: {xs:"column",sm:"column",md:"row"},alignItems:"center", justifyContent:"space-between",marginTop:"5vh",marginBottom:"5vh",flexGrow:1}}>
        <Typography  variant="h2" sx={{display:{xs:"block",md:"none"} ,color: 'var(--text-color)', fontWeight: 600, fontSize: {xs:"2.4rem",sm:"2.8rem",md:"4.5rem"}, mb: '10px' }}>
        {t("aboutUs")}
          </Typography>
        <Image src={docotorPhoto} alt="About Us" sx={{maxHeight:{xs:300,sm:400},alignItem:"center",maxWidth:{xs:300,sm:400}}}/>
        <Box  sx={{textAlign:"center",display:"flex", flexDirection: "column",alignItems:"center", marginRight:{md:5}}} >
        <Typography  variant="h2" sx={{ display:{xs:"none",md:"block"} , color: 'var(--text-color)', fontWeight: 600, fontSize: {xs:"2.4rem",sm:"2.8rem",md:"4.5rem"}, mb: '10px' }}>
                  {t("aboutUs")}
                </Typography>
                <Typography variant="h5" sx={{fontFamily:"var(--font-family)", color: 'var(--text-color)', fontWeight: 500, fontSize: {xs:".9rem",sm:"1rem",md:"1.4rem"}, mb: '20px' }}>
                <span style={{ color: '#4070f4' }}>{t("doctor")}</span> {t("docName")}
                </Typography>
                <Typography minWidth={50}   sx={{fontFamily:"var(--font-family)", color: 'var(--text-color)', fontSize: {xs:".9rem",sm:"1.1rem",md:"1.2rem"}}}>
                {t("docDetail")}
                </Typography>
                <Button  onClick={handleBookingRedirect}   sx={{maxWidth:300,fontFamily:"var(--font-family)",  fontSize: {xs:".7rem",sm:".9rem",md:"1.2rem"},   backgroundColor: 'var(--buttons-color)',
                  color: 'var(--buttons-text-color)',  transition: '0.5s',
                      '&:hover': {
                      color:'var(--buttons-text-hover-color)',
                      backgroundColor: 'var(--buttons-hover-color)', },
                      textDecoration: 'none',
                      padding: {xs:'2% 4%', sm:"3% 5%", md:"2% 4%"},
                      borderRadius: '6px',
                      marginTop: '2%',
                      
                      }} href="#">
                          {t("book")}
                </Button>
          
        </Box>
 
    </Container>

  );
};

export default AboutUs;
