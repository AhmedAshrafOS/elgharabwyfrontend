import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import React, { useState, useEffect } from 'react';
import { Box, Typography, Slide } from '@mui/material';
import { useTranslation } from "react-i18next";

import 'react-awesome-slider/dist/styles.css';

import slide1 from   '../assets/slides/slide1.jpg'
import slide2 from   '../assets/slides/slid2.jpg'
import slide3 from   '../assets/slides/slide3.jpg'



const AutoplaySlider = withAutoplay(AwesomeSlider);

export const BodySlider = () => {
  const { t } = useTranslation();
  const [activeSlides, setActiveSlides] = useState([true, false, false]); 

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlides((prevSlides) => {
        // Find the next slide that hasn't been visited
        const nextIndex = prevSlides.findIndex((active) => !active);
        
        if (nextIndex === -1) { 
          clearInterval(interval); // All slides are activated, stop interval
          return prevSlides;
        }
        
        // Activate the next slide while keeping previous ones true
        return prevSlides.map((active, index) => index <= nextIndex || active);
      });
    }, 3000); // Trigger the next slide activation every 4 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);
    return(
        <AutoplaySlider
        style={{ 
          "--slider-height-percentage":"var(--test)",
            "--slider-transition-duration": "554ms", "--organic-arrow-thickness": "5px",
            "--organic-arrow-border-radius": "30px",
            "--organic-arrow-height": "29px",
            "--organic-arrow-color": "var(--primary-color)",
            "--control-button-width": "10%",
            "--control-button-height": "25%",
            "--control-button-background": "transparent",
            "--control-bullet-color": "transparent",
            "--control-bullet-active-color": "transparent",
            "--loader-bar-color": "var(--primary-color)",
            "--loader-bar-height": "6px"
        }}
        fillParent = {false}
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={4000}
      >

      {/* Slide 1 */}
      <Box sx={{ display: "flex" }} data-src={slide1}>
        <Slide direction="up" in={activeSlides[0]} mountOnEnter unmountOnExit timeout={2000}>
          <Typography sx={{fontFamily:"var(--font-family)", color: "var(--text-third-color)", fontSize: {xs: '1.6rem', sm: '1.8rem',md: '4rem'}, zIndex: 2, position: "relative" }}>
            {t('welcome')}
          </Typography>
        </Slide>
        <Slide direction="down" in={activeSlides[0]} mountOnEnter unmountOnExit timeout={2000}>
          <Typography sx={{ fontFamily:"var(--font-family)",color: "var(--text-third-color)", fontSize: {xs: '.8rem', sm: '.9rem',md: '2rem'}, zIndex: 3, position: "relative" }}>
            {t('slideTextOne')}
          </Typography>
        </Slide>
      </Box>

      {/* Slide 2 */}
      <Box sx={{ display: "flex"  }} data-src={slide2}>
        <Slide direction="down" in={activeSlides[1]} mountOnEnter unmountOnExit timeout={2000}>
          <Typography sx={{ fontFamily:"var(--font-family)",color: "var(--text-third-color)", fontSize: {xs: '1.8rem', sm: '1.8rem',md: '4rem'}, zIndex: 2, position: "relative" }}>
            {t('slideTextTwo')}
          </Typography>
        </Slide>
        <Slide direction="up" in={activeSlides[1]} mountOnEnter unmountOnExit timeout={2000}>
          <Typography sx={{ fontFamily:"var(--font-family)",color: "var(--text-third-color)", fontSize:{xs: '0.8rem', sm: '.9rem',md: '2rem'}, zIndex: 2, position: "relative" }}>
            {t('slideTextThree')}
          </Typography>
        </Slide>
      </Box>

      {/* Slide 3 */}
      <Box sx={{ display: "flex" }} data-src={slide3}>
        <Slide direction="up" in={activeSlides[2]} mountOnEnter unmountOnExit timeout={2000}>
          <Typography sx={{fontFamily:"var(--font-family)", color: "var(--text-third-color)", fontSize: {xs: '1.8rem', sm: '1.8rem',md: '4rem',}, zIndex: 2, position: "relative" }}>
            {t('slideTextFive')}
          </Typography>
        </Slide>
        <Slide direction="down" in={activeSlides[2]} mountOnEnter unmountOnExit timeout={2000}>
          <Typography sx={{fontFamily:"var(--font-family)", color: "var(--text-third-color)", fontSize:{xs: '.8rem', sm: '.9rem',md: '2rem'}, zIndex: 2, position: "relative" }}>
            {t('slideTextFour')}
          </Typography>
        </Slide>
      </Box>
    </AutoplaySlider>

    );


   

}
export default BodySlider;
