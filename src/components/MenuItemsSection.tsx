import React, { useState } from "react";
import { Box, Typography, Container, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Import your images here
import brisketImg from "../assets/brisket.jpg";
import porkbellyImg from "../assets/porkbelly.jpg";
import porkribsImg from "../assets/porkribs.jpg";
import beefribsImg from "../assets/beefribs.jpg";
import smokedSalmonImg from "../assets/smoked-salmon.jpg";
import lambImage from "../assets/lamb.jpg";

// The data structure remains the same
interface MenuItemType {
  title: string;
  image: string;
  description: string;
}

// Corrected data array with 6 items for a clean two-slide carousel
const menuItemsWithImages: MenuItemType[] = [
  {
    title: "Brisket",
    image: brisketImg,
    description: "Slow-smoked for 14+ hours, 250g portion",
  },
  {
    title: "Pork Belly",
    image: porkbellyImg,
    description: "Rich and flavorful pork belly, 250g portion",
  },
  {
    title: "Pork Ribs",
    image: porkribsImg,
    description: "Fall-off-the-bone ribs with smoky bark, 250g portion",
  },
  {
    title: "Beef Ribs",
    image: beefribsImg,
    description: "Juicy beef ribs, expertly smoked, 250g portion",
  },
  {
    title: "Smoked Salmon",
    image: smokedSalmonImg,
    description: "Delicately smoked salmon, 250g portion",
  },
  {
    title: "Lamb",
    image: lambImage,
    description: "Savory smoked lamb, 250g portion",
  },
];


const Menu: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(menuItemsWithImages.length / itemsPerSlide);

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
    );
  };

  return (
    <Box
      component="section"
      sx={{
        py: 8,
        backgroundColor: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 400,
              fontFamily: '"Finger Paint", sans-serif',
              mb: 2,
            }}
          >
            The Pitmaster's Picks
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontFamily: '"Special Elite", system-ui' }}>
            Discover the crème de la crème of organic delights that our customers can't resist. Our Popular Organic Picks feature the most sought-after items from our menu, carefully chosen for their exceptional quality and taste.
          </Typography>
        </Box>
      </Container>
      
      <Box sx={{ position: "relative" }}>
        
        <Box
          sx={{
            display: "flex",
            transition: "transform 0.5s ease-in-out",
            transform: `translateX(-${currentSlide * (100 / itemsPerSlide)}%)`,
          }}
        >
          {menuItemsWithImages.map((item, index) => {
            const isAlternate = index % 2 === 1;
            const imageHeight = isAlternate ? '400px' : '600px';

            return (
              <Box
                key={index}
                sx={{
                  flexShrink: 0,
                  width: `${100 / itemsPerSlide}%`,
                  px: 2,
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    height: imageHeight,
                    boxShadow: 3,
                    borderRadius: 1,
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.title}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      p: 2,
                      bgcolor: "rgba(255, 255, 255, 0.7)",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: "bold",
                        fontFamily: '"Special Elite", system-ui',
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "text.secondary",
                        fontFamily: '"Special Elite", system-ui',
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>

        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            left: { xs: 0, md: 20 },
            top: "50%",
            transform: "translateY(-50%)",
            color: "white",
            background: "rgba(0,0,0,0.4)",
            zIndex: 10,
            "&:hover": { background: "rgba(0,0,0,0.6)" },
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            right: { xs: 0, md: 20 },
            top: "50%",
            transform: "translateY(-50%)",
            color: "white",
            background: "rgba(0,0,0,0.4)",
            zIndex: 10,
            "&:hover": { background: "rgba(0,0,0,0.6)" },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>

      </Box>
    </Box>
  );
};

export default Menu;