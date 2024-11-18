import React from "react";
import Box from '@mui/material/Box';
import BodySlider from "./bodySlider"
import ServicesCards from "./ServicesCards"
import BlogAreaCard from "./BlogCards"
import AboutUs from "./AboutUs"


export const Body = () => {
    return (  

        <Box                  
        sx={{
          flexGrow: 1, 
          display: 'flex',
          flexDirection:"column",
          alignContent:"center",
          alignItems: 'center',
          backgroundColor: 'var(--background)', 
        }}>
            
            <BodySlider></BodySlider>

            <ServicesCards ></ServicesCards>

            <BlogAreaCard />

            <AboutUs></AboutUs>

         
        </Box>

    



    );
};
export default Body;

