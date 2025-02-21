"use client";

import { useState } from "react";
import Link from "next/link";
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

const navItems = ["Home", "About", "Company", "Services", "Contact"];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
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
          bgcolor: "rgba(192, 139, 128, 0.5)", // Increased opacity for better contrast
          backdropFilter: "blur(12px)",
          borderRadius: "30px",
          padding: "8px 20px",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>

          <Box display="flex" alignItems="center">
            <Image
              src="/Error.png"
              alt="Logo"
              width={40}
              height={40}
              // onError={(e) => console.log("Logo failed to load")}
            />
          </Box>

        
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {navItems.map((item, index) => (
              <Link key={index} href={`/${item.toLowerCase()}`} style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    // color: "#C08B80",
                    color: "#fff",
                    fontWeight: "bold",
                    transition: "color 0.3s ease",
                    "&:hover": { color: "#8B5E58" },
                  }}
                >
                  {item}
                </Typography>
              </Link>
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

    
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <List sx={{ width: 200 }}>
          {navItems.map((item, index) => (
            <ListItem key={index} onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
              <Link href={`/${item.toLowerCase()}`} style={{ textDecoration: "none", width: "100%" }}>
                <ListItemText
                  primary={item}
                  sx={{
                    color: "#C08B80",
                    fontWeight: "bold",
                    cursor: "pointer",
                    textAlign: "center",
                  }}
                />
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
