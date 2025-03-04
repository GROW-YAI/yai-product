"use client";
import { Box, Typography,Card } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface AboutInfoProps {
  imageSrc: string;
  title: string;
  description: string;
  reverse: boolean;
  bgColor: string;
}

const AboutInfo = ({ imageSrc, title, description, reverse, bgColor }: AboutInfoProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <Box
      id="about-section"
      ref={sectionRef}
      sx={{ width: "100%", py: 10, overflow: "hidden", position: "relative" }}
    >
      
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
        sx={{ flexDirection: reverse ? "row-reverse" : "row" }}
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
            <motion.div
              initial={{ opacity: 0, x: reverse ? 100 : -100 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : reverse ? 100 : -100 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ width: "100%", height: "100%", position: "relative" }}
            >
              <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
            </motion.div>
          </Box>
        </Grid>

     
        <Grid size={{ xs: 12, md: 6 }} sx={{ zIndex: 3 }}>
          <motion.div
            initial={{ opacity: 0, x: reverse ? -100 : 100 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : reverse ? -100 : 100 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <Box sx={{ px: 4 }}>
              <Typography variant="h4" sx={{ fontWeight: "bold", color: "#333" }}>
                {title}
              </Typography>
              <Typography variant="body1" sx={{ mt: 2, color: "#666" }}>
                {description}
              </Typography>

             
              {!reverse && (
  <Grid container spacing={3} sx={{ mt: 4 }}>
    {[
      { label: "Years of Experience", value: 5 },
      { label: "Projects Completed", value: 100 },
      { label: "Happy Clients", value: 50 },
    ].map((stat, index) => (
      <Grid key={index} size={{xs:12,sm:4}}>
        <Card
          sx={{
            p: 3,
            textAlign: "center",
            borderRadius: 2,
            backgroundColor: "#F5F1EB",
            boxShadow: 3,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
          >
            <Typography variant="h3" sx={{ fontWeight: "bold", color: "#C08B80" }}>
              {stat.value}+
            </Typography>
            <Typography variant="body2" sx={{ color: "#666" }}>
              {stat.label}
            </Typography>
          </motion.div>
        </Card>
      </Grid>
    ))}
  </Grid>
)}

            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutInfo;
