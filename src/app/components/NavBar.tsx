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
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";

const navItems = [
  { label: "Home", id: "home-section" },
  { label: "About", id: "about-clients-section" },
  { label: "Company", id: "about-products-section" },
  { label: "Services", id: "product-section" },
];

const moreItems = [
  { label: "Contact", id: "contact-section" },
  { label: "Testimonials", id: "testimonial-section" },
  { label: "Our Solution", id: "OurSolution-section" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [activeSection, setActiveSection] = useState<string>("home-section");

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleScroll = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({ top: section.offsetTop, behavior: "smooth" });
    }
    setMobileOpen(false);
    handleMenuClose();
  };

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "home-section";
      for (const item of [...navItems, ...moreItems]) {
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

  const isMoreActive = moreItems.some(item => item.id === activeSection);

  return (
    <>
      <AppBar
        position="absolute"
        sx={{
          top: 20,
          left: "50%",
          transform: "translateX(-50%)",
          width: "90%",
          bgcolor: "rgba(192, 139, 128, 0.7)",
          backdropFilter: "blur(14px)",
          borderRadius: "30px",
          padding: "8px 20px",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box display="flex" alignItems="center">
            <Image src="/logo.png" alt="Styles by MakG logo" width={60} height={50} />
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
            <Box>
              <Typography
                sx={{
                  color: isMoreActive ? "#8B5E58" : "#fff",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  borderBottom: isMoreActive ? "2px solid #8B5E58" : "none",
                }}
                onClick={handleMenuOpen}
              >
                More <ExpandMoreIcon />
              </Typography>
              <Menu 
  anchorEl={anchorEl} 
  open={Boolean(anchorEl)} 
  onClose={handleMenuClose} 
  sx={{ 
    mt: 1, 
    "& .MuiPaper-root": {
      bgcolor: "rgba(255, 255, 255, 0.9)", 
      borderRadius: "12px", 
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", 
    },
  }}
>
  {moreItems.map((item, index) => (
    <MenuItem 
      key={index} 
      onClick={(e) => handleScroll(e, item.id)}
      sx={{
        fontWeight: "bold",
        color: "#8B5E58",
        "&:hover": { bgcolor: "rgba(192, 139, 128, 0.2)" },
      }}
    >
      {item.label}
    </MenuItem>
  ))}
</Menu>
            </Box>
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
  sx={{ "& .MuiDrawer-paper": { bgcolor: "rgba(192, 139, 128, 0.5)", backdropFilter: "blur(12px)", color: "#fff" } }}
>
        <List sx={{ width: 200 }}>
          {[...navItems, { label: "More", id: "more", subItems: moreItems }].map((item, index) => (
            <>
              <ListItem key={index} onClick={(e) => handleScroll(e, item.id)} sx={{ cursor: "pointer" }}>
                <ListItemText primary={item.label} sx={{ color: activeSection === item.id ? "#8B5E58" : "#C08B80" }} />
              </ListItem>
              {"subItems" in item &&
                item.subItems.map((sub, subIndex) => (
                  <ListItem key={`sub-${subIndex}`} onClick={(e) => handleScroll(e, sub.id)} sx={{ pl: 4, cursor: "pointer" }}>
                    <ListItemText primary={sub.label} sx={{ color: activeSection === sub.id ? "#8B5E58" : "#C08B80" }} />
                  </ListItem>
                ))}
            </>
          ))}
        </List>
      </Drawer>
    </>
  );
}

