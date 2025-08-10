import React, { useState } from "react";
import { Box, Typography, Container, IconButton, Rating } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

// Define the structure for a testimonial item
interface TestimonialType {
  quote: string;
  author: string;
  rating: number;
}

const testimonialsData: TestimonialType[] = [
  {
    quote:
      "The food was absolutely incredible! Every bite was a testament to quality and passion. A must-visit for anyone who appreciates real, honest food.",
    author: "Alice Johnson",
    rating: 5,
  },
  {
    quote:
      "I've never tasted anything quite like this. The flavors were rich and authentic, and the presentation was beautiful. A truly memorable dining experience.",
    author: "Bob Williams",
    rating: 5,
  },
  {
    quote:
      "A hidden gem! The ambiance is perfect, and the food is out of this world. I'll definitely be coming back for more of their delicious brisket.",
    author: "Charlie Davis",
    rating: 4.5,
  },
  {
    quote:
      "From the moment we walked in, we felt a sense of quality and care. The service was impeccable, and the meal exceeded all expectations. Highly recommended!",
    author: "Diana Evans",
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  const testimonial = testimonialsData[currentTestimonial];

  return (
    <Box
      component="section"
      sx={{
        py: 12,
        backgroundColor: "#f5f0e6", // Beige background color
        color: "text.primary", // Default text color is dark for contrast
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            px: { xs: 2, md: 8 },
          }}
        >
          {/* Quote icon */}
          <FormatQuoteIcon sx={{ fontSize: 60, color: "grey.600", mb: 3 }} />

          {/* Testimonial Quote */}
          <Typography
            variant="h4"
            component="p"
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontStyle: "italic",
              mb: 3,
              fontWeight: 400,
            }}
          >
            {testimonial.quote}
          </Typography>

          {/* Star Rating */}
          <Rating
            name="read-only"
            value={testimonial.rating}
            precision={0.5}
            readOnly
            sx={{ color: "primary.main", mb: 2 }}
          />

          {/* Author */}
          <Typography
            variant="h6"
            sx={{
              fontFamily: '"Special Elite", system-ui',
              fontWeight: "bold",
              color: "text.secondary", // Slightly lighter for the author
            }}
          >
            {testimonial.author}
          </Typography>
        </Box>
      </Container>

      {/* Navigation Arrows */}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          left: { xs: 0, md: 40 },
          top: "50%",
          fontFamily: '"Special Elite", system-ui',
          transform: "translateY(-50%)",
          color: "black",
          background: "rgba(0, 0, 0, 0.1)",
          "&:hover": { background: "rgba(0, 0, 0, 0.2)" },
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          right: { xs: 0, md: 40 },
          top: "50%",
          transform: "translateY(-50%)",
          color: "black",
          background: "rgba(0, 0, 0, 0.1)",
          "&:hover": { background: "rgba(0, 0, 0, 0.2)" },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default Testimonials;