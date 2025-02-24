"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Box, Card, CardContent, Typography, Avatar } from "@mui/material";

const testimonials = [
  { name: "Sarah A.", text: "StyleSphere helped me discover a new level of personal styling. The designs are unique and the virtual consultations were amazing!" },
  { name: "Kwame B.", text: "Fantastic experience! The fitting was perfect, and the eco-friendly fabrics make it even more worth it." },
  { name: "Ama O.", text: "Affordable and stylish! I love how flexible the pricing is. I’ll definitely shop here again." },
];

export default function Testimonials() {
  
  return (
    <Box sx={{ bgcolor: "#F5F1EB", py: 8, px: 3, textAlign: "center" }}>
      <Typography variant="h4" sx={{ color: "#3C5652", fontWeight: "bold", mb: 4 }}>
        What Our Clients Say
      </Typography>

      <Swiper 
        slidesPerView={2}
        spaceBetween={20}
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }} 
        breakpoints={{ 768: { slidesPerView: 1 } }}>
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <Card sx={{ bgcolor: "#C08B80", color: "white", borderRadius: "16px", textAlign: "left", p: 3, boxShadow: 3 }}>
              <CardContent>
                <Avatar sx={{ bgcolor: "#3C5652", mb: 2 }}>{testimonial.name.charAt(0)}</Avatar>
                <Typography variant="body1" sx={{ fontStyle: "italic", mb: 2 }}>
                &ldquo;{testimonial.text}&rdquo;
                </Typography>
                <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>— {testimonial.name}</Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
