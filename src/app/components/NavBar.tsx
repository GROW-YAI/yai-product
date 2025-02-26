"use client";

import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";

const navItems = [
  { label: "Home", id: "home-section" },
  { label: "About", id: "about-clients-section" },
  { label: "Company", id: "about-products-section" },
  { label: "Services", id: "product-section" },
  { label: "Contact", id: "contact-section" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
 
  const handleScroll = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
  
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <AppBar
        position="absolute"
        sx={{
          top: 20,
          left: "50%",
          transform: "translateX(-50%)",
          width: "90%",
          bgcolor: "rgba(192, 139, 128, 0.7)", // Adjusted opacity for better contrast
          backdropFilter: "blur(14px)", // Slightly increased blur effect
          borderRadius: "30px",
          padding: "8px 20px",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>

          <Box display="flex" alignItems="center">
            <Image
              src="/logo.png"
              alt="Styles by MakG logo" 
              width={60}
              height={50}
            />
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {navItems.map((item, index) => (
              <Typography
                key={index}
                sx={{
                  color: "#fff",
                  fontWeight: "bold",
                  transition: "color 0.3s ease",
                  "&:hover": { color: "#8B5E58" },
                  cursor: "pointer",
                }}
                onClick={(e) => handleScroll(e, item.id)}
              >
                {item.label}
              </Typography>
            ))}
          </Box>

          <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleDrawerToggle} sx={{ display: { md: "none" } }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            bgcolor: "rgba(192, 139, 128, 0.5)", 
            backdropFilter: "blur(12px)", 
            color: "#fff", 
          },
        }}
      >
        <List sx={{ width: 200 }}>
          {navItems.map((item, index) => (
            <ListItem key={index} onClick={(e) => handleScroll(e, item.id)} sx={{ textAlign: "center", cursor: "pointer" }}>
              <ListItemText primary={item.label} sx={{ color: "#C08B80", fontWeight: "bold", textAlign: "center" }} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
