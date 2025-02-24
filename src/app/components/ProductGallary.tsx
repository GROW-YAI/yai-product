'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ImageList, ImageListItem, ImageListItemBar, IconButton, Collapse, Box, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

  const handleExpandClick = (index: number) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <Box id="product-section" sx={{ width: '100%', overflow: 'hidden' }}>


      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Product Showcase
      </Typography>
      <ImageList variant="woven" cols={3} gap={8} sx={{ width: '100%', overflow: 'hidden' }}>
        {images.map((image, index) => (
          <ImageListItem key={image.img} cols={image.cols || 1} rows={image.rows || 1}>
            <Image
              src={image.img}
              alt={image.title}
              width={300 * (image.cols || 1)}
              height={200 * (image.rows || 1)}
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <ImageListItemBar
              title={image.title}
              position="top"
              actionIcon={
                <IconButton onClick={() => handleExpandClick(index)}>
                  <ExpandMoreIcon />
                </IconButton>
              }
            />
            <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
              <Box sx={{ p: 1, bgcolor: '#f8f8f8' }}> 
                <Typography variant="body2">{image.description}</Typography> 
              </Box>
            </Collapse>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default ProductGallery;
