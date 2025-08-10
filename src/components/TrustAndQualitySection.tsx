import React from "react";
import { Box, Button, Typography } from "@mui/material";
import premiumMeatImage from "../assets/premiummeat.jpg"; // Placeholder image URL - Replace with your actual image

const TrustAndQualitySection = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, sm: 4, md: 8 },
        bgcolor: '#fffaf0',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          gap: { xs: 4, md: 8 },
        }}
      >
        {/* Left column for the image */}
        <Box
          sx={{
            flex: '1',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              width: { xs: '80%', md: '100%' },
              maxWidth: 400,    
              maxHeight: 500,
              // Key change: Adjusted borderRadius for an oval shape
              borderRadius: '60% / 40%', // Horizontal radius (50%) and vertical radius (10%)
              mx: 'auto',
              overflow: 'hidden',
              boxShadow: 3,
            }}
          >
            <Box
              component="img"
              src={premiumMeatImage}
              alt="Trust and Quality"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
        </Box>

        {/* Right column for the text content */}
        <Box
          sx={{
            flex: '1',
            textAlign: { xs: 'center', md: 'left' },
            p: { xs: 2, md: 4 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: '"Finger Paint", sans-serif',
              fontWeight: 700,
              color: 'text.primary',
              mb: 2,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
            }}
          >
            Quality & Trust
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: '"Special Elite", system-ui',
              color: 'text.secondary',
              lineHeight: 1.6,
            }}
          >
            We are dedicated to a standard of excellence that permeates every aspect of our work. Our commitment to quality ensures that every product is meticulously crafted, and our transparent processes build a foundation of trust with our customers.
          </Typography>
          <Button
            variant="outlined"
            sx={{
              mt: 4,
              borderColor: "#000",
              color: "#000",
              fontFamily: '"Special Elite", system-ui',
              fontSize: "0.9rem",
              paddingX: 3,
              paddingY: 0.5,
              textTransform: "none",
              opacity: 0,
              animation: "slideUpFadeIn 0.4s forwards",
              "&:hover": {
                borderColor: "#fff",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            Learn more
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default TrustAndQualitySection;