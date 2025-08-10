import React from "react";
import { Box } from "@mui/material";

// Define the props for the component
interface FullWidthImageProps {
  imageUrl: string;
  altText?: string;
}

const FullWidthImage = ({ imageUrl, altText = "Image" }: FullWidthImageProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: 400,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Box
        component="img"
        src={imageUrl}
        alt={altText}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
    </Box>
  );
};

export default FullWidthImage;