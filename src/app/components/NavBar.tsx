"use client"

import { useState } from 'react';
import Link from 'next/link';
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
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navItems = ['Home', 'About', 'Company', 'Services', 'Contact'];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: 'white', color: 'black', boxShadow: 0 }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
       
          <Box display="flex" alignItems="center">
            <img src="/logo.png" alt="Logo" width={40} height={40} />
          </Box>

    
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {navItems.map((item, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                {index !== 0 && <Typography sx={{ mx: 1 }}>|</Typography>}
                <Link href={`/${item.toLowerCase()}`} passHref>
                  <Typography
                    component="a"
                    sx={{
                      textDecoration: 'none',
                      color: 'inherit',
                      fontWeight: 'bold',
                      '&:hover': { color: 'blue' },
                    }}
                  >
                    {item}
                  </Typography>
                </Link>
              </Box>
            ))}
          </Box>

       
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

  
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <List sx={{ width: 200 }}>
          {navItems.map((item, index) => (
            <ListItem component="a" key={index} onClick={handleDrawerToggle}>
              <Link href={`/${item.toLowerCase()}`} passHref>
                <ListItemText primary={item} sx={{ textAlign: 'center' }} />
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
