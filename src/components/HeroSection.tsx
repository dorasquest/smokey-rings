import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import "@fontsource/bebas-neue";

interface HeroSectionProps {
  videoSrc: string;
  title: string;
  subtitle?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ videoSrc, title, subtitle }) => {
  const scrollToMenu = () => {
    const menu = document.getElementById("menu-section");
    if (menu) menu.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        @keyframes slideUpFadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes revealText {
          from { width: 0; }
          to { width: 100%; }
        }
      `}</style>

      <Box
        sx={{
          position: "relative",
          height: "100vh",
          overflow: "hidden",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        <Container
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            paddingTop: "30vh",
            color: "#fff",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Title */}
          <Typography
            variant="h1"
            sx={{
              fontFamily: '"Special Elite", system-ui',
              overflow: "hidden",
              whiteSpace: "nowrap",
              borderRight: "2px solid transparent", // optional cursor effect
              opacity: 0,
              animation: `slideUpFadeIn 0.3s forwards, revealText 0.3s steps(${title.length}) forwards`,
              animationDelay: "0s, 0s",
            }}
          >
            {title}
          </Typography>

          {/* Subtitle */}
          {subtitle && (
            <Typography
              variant="h4"
              sx={{
                fontFamily: '"Special Elite", system-ui',
                mt: 2,
                fontWeight: 300,
                letterSpacing: "1px",
                overflow: "hidden",
                whiteSpace: "nowrap",
                borderRight: "2px solid transparent",
                opacity: 0,
                 animation: `slideUpFadeIn 0.3s forwards, revealText 0.3s steps(${title.length}) forwards`,
                animationDelay: "0s, 0s",
              }}
            >
              {subtitle}
            </Typography>
          )}

          {/* Button */}
          <Button
            variant="outlined"
            onClick={scrollToMenu}
            sx={{
              mt: 4,
              borderColor: "#fff",
              color: "#fff",
              fontFamily: '"Special Elite", system-ui',
              fontSize: "0.9rem",
              paddingX: 3,
              paddingY: 0.5,
              textTransform: "none",
              opacity: 0,
              animation: "slideUpFadeIn 0.4s forwards",
              animationDelay: subtitle ? "0.7s" : "0.35s",
              "&:hover": {
                borderColor: "#fff",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            Check Out Our Menu
          </Button>
        </Container>
      </Box>
    </>
  );
};

export default HeroSection;
