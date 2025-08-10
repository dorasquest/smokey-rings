import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import bgImage from '../assets/brisketnice.jpg';

const PlaceOrder: React.FC = () => {
  const accentColor = '#C67269'; // Beef pink accent color
  const whatsappNumber = '1234567890'; // Replace with your WhatsApp number

  const handleWhatsAppClick = () => {
    const prefilledMessage = "Hello, I'd like to place an order.";
    const message = encodeURIComponent(prefilledMessage);
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start', // Align content to the left
        color: 'white',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
        }}
      >
        <Box
          component="img"
          src={bgImage}
          alt="Order background"
          sx={{
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
          }}
        />
      </Box>
      
      {/* Content Box on the left side */}
      <Box
        sx={{
            position: 'absolute',
            left: '60px',
            top: '50px',
            height: '70vh',
            bottom: '40px',
            zIndex: 2,
            width: { xs: '90vw', sm: '70vw', md: '40vw', lg: '32vw' },
            bgcolor: 'rgba(255,255,255,0.7)',
            borderRadius: 6,
            boxShadow: 6,
            m: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            pl: '20px',
            py: { xs: 3, md: 6 },
            pr: { xs: 3, md: 6 },
        }}
      >
        <Typography
          variant="h4"
          component="h4"
          sx={{
            fontFamily: '"Finger Paint", sans-serif',
            mb: 2,
            color: '#222',
            textShadow: '2px 2px 4px rgba(255,255,255,0.2)',
          }}
        >
          How to place an order?
        </Typography>
        {/* Steps as points */}
        <Box sx={{ width: '100%', mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2, textAlign: 'left', fontFamily: '"Special Elite", system-ui', }}>
            <ShoppingCartOutlinedIcon sx={{ fontSize: 32, color: '#333333', mr: 2, fontFamily: '"Special Elite", system-ui', }} />
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#333', textAlign: 'left', fontFamily: '"Special Elite", system-ui', }}>Choose your meat</Typography>
              <Typography variant="body2" sx={{ color: '#333', textAlign: 'left', fontFamily: '"Special Elite", system-ui', }}>Browse our selection of expertly smoked and slow-cooked meats. Each dish is prepared with the finest ingredients and a passion for authentic barbecue.</Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2, textAlign: 'left',fontFamily: '"Special Elite", system-ui', }}>
            <WhatsAppIcon sx={{ fontSize: 32, color: '#333333', mr: 2 ,fontFamily: '"Special Elite", system-ui',}} />
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#333', textAlign: 'left', fontFamily: '"Special Elite", system-ui', }}>Place your order on WhatsApp</Typography>
              <Typography variant="body2" sx={{ color: '#333', textAlign: 'left',fontFamily: '"Special Elite", system-ui', }}>Connect directly with our team to place your order. Our agent will guide you through the menu and confirm your order details instantly for a seamless experience.</Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', textAlign: 'left',fontFamily: '"Special Elite", system-ui', }}>
            <ArchiveOutlinedIcon sx={{ fontSize: 32, color: '#333333', mr: 2, fontFamily: '"Special Elite", system-ui',}} />
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#333', textAlign: 'left', fontFamily: '"Special Elite", system-ui', }}>Receive your food!</Typography>
              <Typography variant="body2" sx={{ color: '#333', textAlign: 'left',fontFamily: '"Special Elite", system-ui', }}>We ensure your order is packed fresh and delivered right to your doorstep. Enjoy the perfect barbecue feast without leaving the comfort of your home.</Typography>
            </Box>
          </Box>
        </Box>
        <Button
          variant="contained"
          size="large"
          startIcon={<WhatsAppIcon />}
          onClick={handleWhatsAppClick}
          sx={{
            bgcolor: accentColor,
            fontFamily: '"Special Elite", system-ui',
            color: 'white',
            py: 1.5,
            px: 4,
            borderRadius: 8,
            mt: 0.5, // Move button up slightly
            mb: 1,   // Add a little space below if needed
            '&:hover': { bgcolor: '#A35A51' },
          }}
        >
          Order on WhatsApp
        </Button>
      </Box>
    </Box>
  );
};

export default PlaceOrder;