import React from 'react';

import { Grid,Box,CardActionArea,Typography,CardMedia,CardContent,Card } from '@mui/material';
import { useTranslation } from 'react-i18next';

import cardone from '../assets/cards/cardone.jpg';
import cardtwo from '../assets/cards/cardtwo.jpg';
import cardthree from '../assets/cards/cardthree.jpg';
import cardfour from '../assets/cards/cardfour.jpg';
import cardfive from '../assets/cards/cardfive.jpg';
import cardsix from '../assets/cards/cardsix.jpg';
import cardseven from '../assets/cards/cardseven.jpg';
import sectionMid from '../assets/section-img.png';


function ServicesCards() {
  const { t } = useTranslation();


  // Data for cards
  const cards = [
    { id: 1, image: cardseven, title: 'serviceOne', description: 'serviceOneSecond' },
    { id: 2, image: cardone, title: 'serviceTwo', description: 'serviceTwoSecond' },
    { id: 3, image: cardfour, title: 'serviceThree', description: 'serviceThreeSecond' },
    { id: 4, image: cardthree, title: 'serviceFour', description: 'serviceFourSecond' },
    { id: 5, image: cardtwo, title: 'serviceFive', description: 'serviceFiveSecond' },
    { id: 6, image: cardfive, title: 'serviceSix', description: 'serviceSixSecond' },
    { id: 7, image: cardsix, title: 'serviceSeven', description: 'serviceSevenSecond' },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: 'var(--background)',
        marginTop: '3vh',
        marginBottom: '3vh',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '1.7rem', md: '3rem' },
            textAlign: 'center',
            color: 'var(--primary-color)',
          }}
       
        >
          {t('serviceHeader')}
        </Typography>
        <img id="services-section" src={sectionMid} alt="section" />
        <Typography
          sx={{
            fontSize: { xs: '1.0rem', md: '1.4rem' },
            textAlign: 'center',
            color: 'var(--primary-color)',
          }}
    
        >
          {t('serviceSecond')}
        </Typography>
      </Box>

      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{
          maxWidth: { xs: '90%', sm: '90%', md: '80%' },
          marginTop: '3vh',
          marginBottom: '3vh',
        }}
      >
        {cards.map((card) => (
          <Grid
            item
            key={card.id}
            xs={12} // 1 card in extra small screens
            sm={4}  // 3 cards in small screens
            md={3}  // 4 cards in medium and larger screens
          >
            <Card
              sx={{
                color: 'var(--primary-color)',
                height: '100%',
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"

                  image={card.image}
                  alt={card.title}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      fontSize: { xs: '1.0rem', md: '1.5rem' },
                      textAlign: 'center',
                    }}
                  >
                    {t(card.title)}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      display:{xs:"none",md:"block"},
                        color: 'text.secondary',
                    }}
                    >
                    {t(card.description)}
                    </Typography>
                    <Typography
                    variant="body2"
                    sx={{
                      display:{xs:"block",md:"none"},
                        color: 'text.secondary',
                    }}
                    >
                    {t(card.description)}
                    </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      
    </Box>
  );
}

export default ServicesCards;
