"use client";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Navbar from "./components/NavBar";
import HeroSection from "./components/HeroCom";
import AboutInfo from "./components/AboutInfo";
import ContactForm from "./components/ContactForm";
import ProductGallery from "./components/ProductGallary";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonals";
import { speakText } from "./utilis/textToSpeech";
import { Mic, MicOff } from "@mui/icons-material";
import OurSolution from "./components/OurSolution";

const images = [
  { img: "/maxi.png", title: "Elegant Maxi Dress", description: "A flowing Ankara maxi dress with bold patterns, perfect for formal and cultural events." },
  { img: "/africansuit.png", title: "Classic African Suit", description: "A tailored Ankara suit combining tradition with contemporary elegance, ideal for special occasions." },
  { img: "/dashiki.png", title: "Casual Dashiki Look", description: "A relaxed yet fashionable dashiki top with bold prints, paired with jeans for everyday wear." },
  { img: "/short.png", title: "Vibrant Short Dress", description: "A flared African print dress with rich colors, designed for a fun and trendy look." },
  { img: "/jumpsuit.png", title: "Chic Ankara Jumpsuit", description: "A stylish, fitted jumpsuit that blends tradition with modern fashion. Great for both casual and semi-formal wear." },
  { img: "/shirt.png", title: "Stylish Ankara Shirt", description: "A modern African print shirt paired with fitted trousers, perfect for a smart-casual look. Fashion bag for all occasions." },
];

export default function Home() {
  const [ttsEnabled, setTtsEnabled] = useState(true);

  useEffect(() => {
    const savedTtsSetting = localStorage.getItem("ttsEnabled");
    if (savedTtsSetting !== null) {
      setTtsEnabled(savedTtsSetting === "true");
    }

    if (ttsEnabled) {
      speakText("Welcome to Styles By MakG. Elevate your style, define your sphere.");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!ttsEnabled) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            speakText(entry.target.getAttribute("data-tts") || "");
          }
        });
      },
      { threshold: 0.6 }
    );

    document.querySelectorAll("[data-tts]").forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [ttsEnabled]);

  return (
    <>
      <Box id="home-section" sx={{ position: "relative", height: "100vh", overflow: "hidden" }}>
        <Box
          sx={{
            position: "fixed",
            top: 0,
            width: "100%",
            zIndex: 10,
            backgroundColor: "white",
            boxShadow: 2,
          }}
        >
          <Navbar />
        </Box>

        <HeroSection
          title="Styles By MakG"
          subtitle="Elevate Your Style, Define Your Sphere"
          backgroundImage="/her.png"
        />
      </Box>

      <Box id="about-clients-section" data-tts="About Innovator section">
        <AboutInfo
          title="About Innovator"
          description="Margaret’s Personalized Virtual Fashion Boutique is a revolutionary online platform that makes customized fashion accessible and eco-friendly. Clients can design their outfits using an intuitive virtual interface, ensuring their unique style and preferences are met. The boutique incorporates a 3D body measurement app to provide precise sizing, eliminating common fit issues. Customers can choose from a range of eco-friendly fabrics, supporting sustainable fashion."
          bgColor="#202120"
          imageSrc="/inovator.png"
          reverse={false}
        />
      </Box>

      <Box id="about-products-section" data-tts="About Our Products section">
        <AboutInfo
          title="About Our Products"
          description="Styles By MakG offers affordable and flexible pricing packages, ensuring inclusivity for different budgets. Clients also enjoy convenient home and office delivery, along with mobile styling consultations, making the entire fashion experience seamless, from design to doorstep."
          imageSrc="/product1.png"
          reverse={true}
          bgColor="#202120"
        />
      </Box>

      <Box id="OurSolution-section" data-tts="Our-solution section">
        <OurSolution />
      </Box>

      <Box id="product-section" data-tts="Product Gallery section">
        <ProductGallery images={images} />
      </Box>

      <Box id="contact-section" data-tts="Contact Form section">
        <ContactForm />
      </Box>

      <Box id="testimonial-section" data-tts="Testimonials section">
        <Testimonials />
      </Box>

      <Footer />
    </>
  );
}
