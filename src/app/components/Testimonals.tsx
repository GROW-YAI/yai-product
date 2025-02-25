"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Box, Card, CardContent, Typography, Avatar, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const testimonials = [
  { name: "Sarah A.", text: "StyleSphere helped me discover a new level of personal styling. The designs are unique and the virtual consultations were amazing!" },
  { name: "Kwame B.", text: "Fantastic experience! The fitting was perfect, and the eco-friendly fabrics make it even more worth it." },
  { name: "Ama O.", text: "Affordable and stylish! I love how flexible the pricing is. I’ll definitely shop here again." },
  { name: "Kofi D.", text: "StyleSphere’s customer service is top-notch! They really listen to your preferences and deliver exactly what you need." },
  { name: "Akosua M.", text: "The quality of the outfits exceeded my expectations. It feels premium yet so comfortable. Highly recommend!" },
  { name: "Jason T.", text: "I’ve never felt more confident in my outfits. The styling suggestions were spot on, and the delivery was super fast!" },
  {name:"Nana A.", text:"I love the variety of products available. I can always find something that suits my style and budget."},
];

export default function Testimonials() {
  return (
    <Box id="testimonial-section" sx={{ bgcolor: "#F5F1EB", py: 8, px: 3, textAlign: "center", position: "relative" }}>
      <Typography variant="h4" sx={{ color: "#3C5652", fontWeight: "bold", mb: 4 }}>
        What Our Clients Say
      </Typography>

 
      <IconButton
  className="swiper-button-prev"
  sx={{
    position: "absolute",
    left: 10,
    top: "50%",
    color: "#3C5652 !important", 
    fontSize: "1.5rem",
  }}
>
  <ArrowBackIos fontSize="inherit" />
</IconButton>

      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        breakpoints={{ 768: { slidesPerView: 1 } }}
      >
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

    
      <IconButton
  className="swiper-button-next"
  sx={{
    position: "absolute",
    right: 10,
    top: "50%",
    color: "#3C5652 !important",
    fontSize: "1.5rem",
  }}
>
  <ArrowForwardIos fontSize="inherit" />
</IconButton>
    </Box>
  );
}
