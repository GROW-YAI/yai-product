"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  IconButton,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const testimonials = [
  { name: "Sarah A.", text: "Styles By MakG helped me discover a new level of personal styling. The designs are unique and the virtual consultations were amazing!" },
  { name: "Kwame B.", text: "Fantastic experience! The fitting was perfect, and the eco-friendly fabrics make it even more worth it." },
  { name: "Ama O.", text: "Affordable and stylish! I love how flexible the pricing is. I’ll definitely shop here again." },
  { name: "Kofi D.", text: "Styles By MakG’s customer service is top-notch! They really listen to your preferences and deliver exactly what you need." },
  { name: "Akosua M.", text: "The quality of the outfits exceeded my expectations. It feels premium yet so comfortable. Highly recommend!" },
  { name: "Jason T.", text: "I’ve never felt more confident in my outfits. The styling suggestions were spot on, and the delivery was super fast!" },
  { name: "Nana A.", text: "I love the variety of products available. I can always find something that suits my style and budget." },
];

export default function Testimonials() {
  return (
    <Box
      id="testimonial-section"
      sx={{
        bgcolor: "#FAF3E0",
        py: 8,
        px: { xs: 2, sm: 4, md: 6 },
        textAlign: "center",
        position: "relative",
      }}
    >
      {/* Section Heading */}
      <Typography
        variant="h4"
        sx={{
          color: "#B88E2F",
          fontWeight: "bold",
          mb: { xs: 4, md: 6 },
        }}
      >
        What Our Clients Say
      </Typography>

      {/* Prev Button */}
      <IconButton
        className="swiper-button-prev"
        sx={{
          position: "absolute",
          left: { xs: 5, md: 30 },
          top: "50%",
          transform: "translateY(-50%)",
          bgcolor: "#B88E2F",
          color: "white !important",
          "&:hover": { bgcolor: "#A67C00" },
          width: 40,
          height: 40,
          zIndex: 10,
          boxShadow: 3,
        }}
      >
        <ArrowBackIos fontSize="small" />
      </IconButton>

      {/* Swiper Carousel */}
      <Swiper
        slidesPerView={1}
        spaceBetween={24}
        centeredSlides
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        breakpoints={{
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 2, spaceBetween: 32 },
        }}
        style={{ paddingBottom: "40px" }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} style={{ display: "flex", justifyContent: "center" }}>
            <Card
              sx={{
                bgcolor: "#FFF8E1",
                color: "#B88E2F",
                borderRadius: "16px",
                textAlign: "left",
                p: 4,
                maxWidth: 450,
                mx: "auto",
                boxShadow: 6,
              }}
            >
              <CardContent>
                <Avatar sx={{ bgcolor: "#D4AF37", mb: 2 }}>
                  {testimonial.name.charAt(0)}
                </Avatar>
                <Typography
                  variant="body1"
                  sx={{ fontStyle: "italic", mb: 2 }}
                >
                  &ldquo;{testimonial.text}&rdquo;
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: "bold", color: "#B88E2F" }}
                >
                  — {testimonial.name}
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Next Button */}
      <IconButton
        className="swiper-button-next"
        sx={{
          position: "absolute",
          right: { xs: 5, md: 30 },
          top: "50%",
          transform: "translateY(-50%)",
          bgcolor: "#B88E2F",
          color: "white !important",
          "&:hover": { bgcolor: "#A67C00" },
          width: 40,
          height: 40,
          zIndex: 10,
          boxShadow: 3,
        }}
      >
        <ArrowForwardIos fontSize="small" />
      </IconButton>
    </Box>
  );
}
