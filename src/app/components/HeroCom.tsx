import { Box, Typography, Container, Button } from "@mui/material";
import Link from 'next/link';
import { speakText } from "../utilis/textToSpeech";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const HeroSection = ({ title, subtitle, backgroundImage }: HeroSectionProps) => {
  return (
    <Box id='home-section'
      sx={{
        position: "relative",
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#FFFFF0", 
        backgroundColor: "#000000", 
      }}
    >
    
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5))",
        }}
      />
      
      <Container
        sx={{
          position: "relative",
          textAlign: "center",
          zIndex: 1,
        }}
      >
        <Typography 
          variant="h2" 
          fontWeight={700} 
          gutterBottom 
          sx={{ 
            textShadow: "2px 2px 10px rgba(255, 255, 240, 0.6)", 
            fontSize: { xs: "2rem", sm: "3rem", md: "4rem" }
          }}
        >
          {title}
        </Typography>
        <Typography 
          variant="h5" 
          fontWeight={300} 
          sx={{ fontSize: { xs: "1rem", sm: "1.5rem" } }}
        >
          {subtitle}
        </Typography>
        <Link href="/#product-section" passHref>
      <Button
        variant="contained"
        sx={{
          marginTop: 3,
          backgroundColor: "#000000",
          color: "#FFD700", 
          border: "2px solid #FFD700", 
          borderRadius: "20px",
          padding: "10px 20px",
          fontWeight: "bold",
          boxShadow: "0px 4px 10px rgba(255, 215, 0, 0.6)", 
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)",
            backgroundColor: "#222222", 
            boxShadow: "0px 6px 12px rgba(255, 215, 0, 0.8)",
          },
        }}
        onClick={() => speakText("Navigating to product section")}
        onMouseEnter={() => speakText("Get Started button")}
      >
        Get Started
      </Button>
    </Link>
      </Container>
    </Box>
  );
};

export default HeroSection;
