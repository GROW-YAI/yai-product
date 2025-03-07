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

  const isMoreActive = moreItems.some((item) => item.id === activeSection);

  return (
    <>
    <AppBar
  position="absolute"
  sx={{
    top: 20,
    left: "50%",
    transform: "translateX(-50%)",
    width: "90%",
    bgcolor: "rgba(34, 34, 34, 0.9)", 
    backdropFilter: "blur(10px)",
    borderRadius: "30px",
    padding: "8px 20px",
    boxShadow: "0px 4px 12px rgba(230, 194, 0, 0.3)", 
  }}
>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box display="flex" alignItems="center">
            <Image src="/logo.png" alt="Styles by MakG logo" width={60} height={50} />
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
          {navItems.map((item) => (
  <Typography
    key={item.id} // Add a unique key here
    sx={{
      color: activeSection === item.id ? "#E6C200" : "#F5F5F5",
      fontWeight: "bold",
      transition: "color 0.3s ease",
      "&:hover": { color: "#D4AF37" },
      cursor: "pointer",
      borderBottom: activeSection === item.id ? "2px solid #E6C200" : "none",
    }}
  >
    {item.label}
  </Typography>
))}
            <Box>
              <Typography
                sx={{
                  color: isMoreActive ? "#FFD700" : "#fff",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  borderBottom: isMoreActive ? "2px solid #FFD700" : "none",
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
                    bgcolor: "rgba(0, 0, 0, 0.9)",
                    borderRadius: "12px",
                    boxShadow: "0px 4px 12px rgba(255, 215, 0, 0.3)",
                  },
                }}
              >
                {moreItems.map((item, index) => (
                  <MenuItem
                    key={index}
                    onClick={(e) => handleScroll(e, item.id)}
                    sx={{
                      fontWeight: "bold",
                      color: "#FFD700",
                      "&:hover": { bgcolor: "rgba(255, 215, 0, 0.2)" },
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
  sx={{
    "& .MuiDrawer-paper": {
      bgcolor: "rgba(44, 44, 44, 0.9)", 
      backdropFilter: "blur(10px)",
      color: "#E6C200", 
    },
  }}
>
        <List sx={{ width: 200 }}>
          {[...navItems, { label: "More", id: "more", subItems: moreItems }].map((item, index) => (
            <div key={index}>
              <ListItem onClick={(e) => handleScroll(e, item.id)} sx={{ cursor: "pointer" }}>
                <ListItemText primary={item.label} sx={{ color: activeSection === item.id ? "#FFD700" : "#FFF" }} />
              </ListItem>
              {"subItems" in item &&
                item.subItems.map((sub, subIndex) => (
                  <ListItem key={`sub-${subIndex}`} onClick={(e) => handleScroll(e, sub.id)} sx={{ pl: 4, cursor: "pointer" }}>
                    <ListItemText primary={sub.label} sx={{ color: activeSection === sub.id ? "#FFD700" : "#FFF" }} />
                  </ListItem>
                ))}
            </div>
          ))}
        </List>
      </Drawer>
    </>
  );
}
