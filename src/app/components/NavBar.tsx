"use client";

import { useState, useEffect } from "react";
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
  const [activeSection, setActiveSection] = useState<string>("home-section");

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

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "home-section"; // Default to home section
      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = item.id;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
                  color: activeSection === item.id ? "#8B5E58" : "#fff",
                  fontWeight: "bold",
                  transition: "color 0.3s ease",
                  "&:hover": { color: "#8B5E58" },
                  cursor: "pointer",
                  borderBottom: activeSection === item.id ? "2px solid #8B5E58" : "none",
                }}
                onClick={(e) => handleScroll(e, item.id)}
              >
                {item.label}
              </Typography>
            ))}
          </Box>

          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
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
            <ListItem
              key={index}
              onClick={(e) => handleScroll(e, item.id)}
              sx={{
                textAlign: "center",
                cursor: "pointer",
                bgcolor: activeSection === item.id ? "rgba(139, 94, 88, 0.3)" : "transparent",
                borderRadius: "8px",
              }}
            >
              <ListItemText
                primary={item.label}
                sx={{
                  color: activeSection === item.id ? "#8B5E58" : "#C08B80",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
