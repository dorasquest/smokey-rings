import React from "react";
import { Box, Typography, Container } from "@mui/material";

const AboutUsSection: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        py: 8,
        backgroundColor: "#f5f0e6",
        color: "#000",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "flex-start",
          gap: 4,
        }}
      >
        {/* Left side - About Us heading */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 400,
              fontFamily: '"Finger Paint", sans-serif',
              mb: 2,
            }}
          >
            About Us
          </Typography>
        </Box>

        {/* Right side - Description and subtexts */}
        <Box sx={{ flex: 2 }}>
          {/* Main description */}
          <Typography
            variant="body1"
            sx={{
              fontFamily: '"Special Elite", system-ui',
              fontSize: "1.1rem",
              lineHeight: 1.6,
              fontWeight: 400,
              mb: 3,
            }}
          >
            At Smokey Rings, we slow-smoke our meats for over 14 hours
            continuously, breaking down the toughest cuts to create tender,
            flavorful, and savory bites. This meticulous process unlocks
            deep smoky flavors that true meat lovers crave.
          </Typography>

          {/* Subtexts container - row layout */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 4,
            }}
          >
            {/* Subsection 1 */}
            <Typography
              variant="body2"
              sx={{
                fontFamily: '"Special Elite", system-ui',
                fontSize: "0.9rem",
                lineHeight: 1.4,
                fontWeight: 300,
                flex: 1,
              }}
            >
              Our smokehouse uses only the finest hardwoods to infuse rich,
              natural flavors, ensuring each bite carries that authentic smoked
              taste.
            </Typography>

            {/* Subsection 2 */}
            <Typography
              variant="body2"
              sx={{
                fontFamily: '"Special Elite", system-ui',
                fontSize: "0.9rem",
                lineHeight: 1.4,
                fontWeight: 300,
                flex: 1,
              }}
            >
              We take pride in our craft, combining traditional smoking
              techniques with modern precision to deliver consistently
              exceptional results.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUsSection;
