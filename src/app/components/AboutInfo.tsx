"use client";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";

interface AboutInfoProps {
  imageSrc: string;
  title: string;
  description: string;
  reverse: boolean;
  bgColor: string;
}

const AboutInfo = ({ imageSrc, title, description, reverse, bgColor }: AboutInfoProps) => {
  return (
    <Box id='#about-section' sx={{ width: "100%", py: 10, overflow: "hidden", position: "relative" }}>
 
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          width: "30%",
          backgroundColor: bgColor,
          zIndex: 1,
          left: reverse ? "auto" : 0,
          right: reverse ? 0 : "auto",
        }}
      />

    
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        spacing={4}
        sx={{ flexDirection: reverse ? "row-reverse" : "row" }} // Reverse the order of the grid items
      >
   
        <Grid size={{ xs: 12, md: 6 }} sx={{ position: "relative", display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              position: "relative",
              width: "90%",
              maxWidth: 500,
              height: 400,
              borderRadius: "20px",
              overflow: "hidden",
              zIndex: 2,
            }}
          >
            <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
          </Box>
        </Grid>

   
        <Grid size={{ xs: 12, md: 6 }} sx={{ zIndex: 3 }}>
          <Box sx={{ px: 4 }}>
            <Typography variant="h4" sx={{ fontWeight: "bold", color: "#333" }}>
              {title}
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, color: "#666" }}>
              {description}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutInfo;
