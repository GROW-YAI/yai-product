// import Image from "next/image";
import { Box, Container } from "@mui/material"; 
import Navbar from "./components/NavBar";
import HeroSection from "./components/HeroCom";

export default function Home() {
  return (
    <Box sx={{ position: "relative", height: "100vh", overflow: "hidden" }}>

    <Box sx={{ position: "absolute", width: "100%", zIndex: 10,marginTop:2 }}>
      <Navbar />
    </Box>
    <HeroSection
      title="StyleSphere"
      subtitle="Elevate Your Style, Define Your Sphere"
      backgroundImage="/heropic.png"
    />
  </Box>
  );
}
