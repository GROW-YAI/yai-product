"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ImageList, ImageListItem, ImageListItemBar, IconButton, Collapse, Box, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";

interface Image {
  img: string;
  title: string;
  description: string;
  rows?: number;
  cols?: number;
}

interface ProductGalleryProps {
  images: Image[];
}

const ProductGallery = ({ images }: ProductGalleryProps) => {
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const handleExpandClick = (index: number) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const imgIndex = entry.target.getAttribute("data-index"); 
            if (imgIndex !== null) {
              setVisibleIndexes((prev) => [...new Set([...prev, Number(imgIndex)])]); 
            }
          }
        });
      },
      { threshold: 0.3 }
    );
  
    if (sectionRef.current) {
      sectionRef.current.querySelectorAll(".image-item").forEach((el) => observer.observe(el));
    }
  
    return () => observer.disconnect();
  }, []);
  

  return (
    <Box ref={sectionRef} id="product-section" sx={{ width: "100%", overflow: "hidden", py: 4 }}>
  
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
          Product Showcase
        </Typography>
      </motion.div>

    
      <ImageList variant="woven" cols={3} gap={8} sx={{ width: "100%", overflow: "hidden" }}>
        {images.map((image, index) => (
          <ImageListItem key={image.img} cols={image.cols || 1} rows={image.rows || 1} className="image-item" data-index={index}>
       
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={visibleIndexes.includes(index) ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              style={{ width: "100%", height: "100%" }}
            >
              <Image
                src={image.img}
                alt={image.title}
                width={300 * (image.cols || 1)}
                height={200 * (image.rows || 1)}
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px" }}
              />
            </motion.div>

          
            <ImageListItemBar
              title={image.title}
              position="top"
              actionIcon={
                <IconButton onClick={() => handleExpandClick(index)}>
                  <ExpandMoreIcon style={{ color: "#ffff" }} />
                </IconButton>
              }
            />

           
            <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: expanded[index] ? 1 : 0, y: expanded[index] ? 0 : 10 }}
                transition={{ duration: 0.5 }}
              >
                <Box sx={{ p: 1, bgcolor: "#f8f8f8", borderRadius: "5px" }}>
                  <Typography variant="body2">{image.description}</Typography>
                </Box>
              </motion.div>
            </Collapse>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default ProductGallery;
