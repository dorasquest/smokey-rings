import React from 'react';
import { Box, Typography, Container, Button, TextField, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import bgImage from '../assets/platter2.jpg';

// This is a placeholder for your brand logo and name
const BrandLogo = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: { xs: 4, md: 6 } }}>
    <Box
      sx={{
        width: 80,
        height: 80,
        bgcolor: '#C67269',
        borderRadius: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Placeholder for a logo icon */}
      <Box sx={{ width: 40, height: 40, bgcolor: 'white', borderRadius: '50%' }} />
    </Box>
    <Typography
      variant="h4"
      sx={{
        fontFamily: '"Finger Paint", sans-serif',
        color: 'white',
        mt: 2,
      }}
    >
      Smokehouse
    </Typography>
  </Box>
);

const ContactUs: React.FC = () => {
  const accentColor = '#C67269';

  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 6, md: 8 },
        bgcolor: '#1c1c1c',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <Box
          component="img"
          src={bgImage}
          alt="Contact background"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.18,
          }}
        />
      </Box>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Brand Logo and Name on Top */}
        <BrandLogo />

        {/* Three-partition flexbox layout */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 4, md: 8 },
            justifyContent: 'space-between',
          }}
        >
          {/* First Partition: Subscribe to Email */}
          <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: '"Special Elite", system-ui',
                color: 'white',
                mb: 1,
              }}
            >
              Subscribe for deals, offers and upcoming events.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <TextField
                variant="filled"
                label="Enter your email"
                fullWidth
                InputLabelProps={{
                  sx: { color: 'text.secondary', fontFamily: '"Special Elite", system-ui' },
                }}
                sx={{
                  mr: 1,
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  '& .MuiFilledInput-root': {
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  bgcolor: accentColor,
                  minWidth: 56,
                  '&:hover': { bgcolor: '#A35A51' },
                }}
              >
                <ArrowForwardIcon />
              </Button>
            </Box>
          </Box>

          {/* Second Partition: Contact Info */}
          <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: '"Special Elite", system-ui',
                color: 'white',
                mb: 2,
              }}
            >
              Contact Information
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <PhoneIcon sx={{ color: accentColor, mr: 1 }} />
              <Typography variant="body1" sx={{ color: 'white' }}>
                +94 91 454 9650
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <EmailIcon sx={{ color: accentColor, mr: 1 }} />
              <Typography variant="body1" sx={{ color: 'white' }}>
                xample@mail.com
              </Typography>
            </Box>
          </Box>

          {/* Third Partition: Socials and Reservation */}
          <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: '"Special Elite", system-ui',
                color: 'white',
                mb: 2,
              }}
            >
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <IconButton sx={{ color: 'white', '&:hover': { color: accentColor } }}>
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{ color: 'white', '&:hover': { color: accentColor } }}>
                <InstagramIcon />
              </IconButton>
              <IconButton sx={{ color: 'white', '&:hover': { color: accentColor } }}>
                <TwitterIcon />
              </IconButton>
              <IconButton sx={{ color: 'white', '&:hover': { color: accentColor } }}>
                <YouTubeIcon />
              </IconButton>
            </Box>
            <Button
              variant="outlined"
              sx={{
                borderColor: accentColor,
                color: accentColor,
                fontFamily: '"Special Elite", system-ui',
                py: 1,
                px: 3,
                mt: 3,
                '&:hover': { borderColor: '#A35A51', color: '#A35A51' },
              }}
            >
              Reservation
              <ArrowForwardIcon sx={{ ml: 1, fontSize: 16 }} />
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUs;