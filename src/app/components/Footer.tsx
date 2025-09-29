"use client";
import React from "react";
import {
  Container,
  Typography,
  IconButton,
  Link as MuiLink,
  Box,
  Stack,
  Divider,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Facebook, Instagram, Twitter, WhatsApp } from "@mui/icons-material";
import Image from "next/image";

export default function Footer() {
  const social = [
    { label: "Facebook", href: "https://www.facebook.com/stylesbymakg", icon: <Facebook /> },
    { label: "Instagram", href: "https://www.instagram.com/stylesbymakg/", icon: <Instagram /> },
    { label: "X (Twitter)", href: "https://x.com/stylesbymakg", icon: <Twitter /> },
    { label: "WhatsApp", href: "https://wa.me/233XXXXXXXXX", icon: <WhatsApp /> },
  ];

  const quickLinks = [
    { label: "Home", id: "home-section" },
    { label: "Shop", id: "product-section" },
    { label: "About Our Products", id: "about-products-section" },
    { label: "About Our Clients", id: "about-clients-section" },
    { label: "Contact", id: "contact-section" },
    { label: "Testimonials", id: "testimonial-section" },
  ];

  return (
    <footer style={{ backgroundColor: "#302E2A", color: "#F5F1EB", width: "100%" }}>
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Grid
          container
          spacing={4}
          alignItems="flex-start"
          justifyContent={{ xs: "center", md: "space-between" }}
        >
          {/* Branding */}
          <Grid >
            <Stack direction="row" spacing={2} alignItems="center">
              <Box sx={{ width: 56, height: 56, position: "relative" }}>
                <Image
                  src="/logo.png"
                  alt="Styles by MakG logo"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </Box>
              <Box>
                <Typography variant="h6" sx={{ color: "#D4AF37", fontWeight: "bold" }}>
                  Styles By MakG
                </Typography>
                <Typography variant="body2" sx={{ maxWidth: 320 }}>
                  Your go-to destination for the latest fashion trends and timeless styles.
                </Typography>
                <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                  <Typography variant="caption" component="div">
                    <strong>Contact:</strong>
                  </Typography>
                  <MuiLink
                    href="mailto:hello@stylesbymakg.com"
                    underline="hover"
                    sx={{ color: "#F5F1EB" }}
                  >
                    hello@stylesbymakg.com
                  </MuiLink>
                </Stack>
              </Box>
            </Stack>
          </Grid>
          

          {/* Quick links */}
          <Grid >
            <Typography variant="h6" gutterBottom sx={{ color: "#D4AF37", fontWeight: "bold" }}>
              Quick Links
            </Typography>
            <Stack component="nav" spacing={0.5}>
              {quickLinks.map((item, idx) => (
                <MuiLink
                  key={idx}
                  href={`#${item.id}`}
                  underline="hover"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  sx={{ color: "#F5F1EB", display: "inline-block", cursor: "pointer" }}
                >
                  {item.label}
                </MuiLink>
              ))}
            </Stack>
          </Grid>

          {/* Social + small contact */}
          <Grid >
            <Typography variant="h6" gutterBottom sx={{ color: "#D4AF37", fontWeight: "bold" }}>
              Connect with us
            </Typography>

            <Stack direction="row" spacing={1} alignItems="center" sx={{ flexWrap: "wrap" }}>
              {social.map((s, i) => (
                <IconButton
                  key={i}
                  component="a"
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  sx={{ color: "#F5F1EB", "&:hover": { color: "#D4AF37" } }}
                >
                  {s.icon}
                </IconButton>
              ))}
            </Stack>

            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
                Working hours
              </Typography>
              <Typography variant="body2">Mon — Fri: 9:00 AM — 6:00 PM</Typography>
            </Box>

            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
                Visit us
              </Typography>
              <Typography variant="body2">Accra, Ghana</Typography>
            </Box>
          </Grid>
          

        </Grid>

        <Divider sx={{ my: 3, borderColor: "rgba(245,241,235,0.08)" }} />

        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="body2" sx={{ color: "#F5F1EB" }}>
            © {new Date().getFullYear()} Styles By MakG. All rights reserved.
          </Typography>

          <Stack direction="row" spacing={2} alignItems="center">
            <MuiLink href="/terms" underline="hover" sx={{ color: "#F5F1EB" }}>
              Terms
            </MuiLink>
            <MuiLink href="/privacy" underline="hover" sx={{ color: "#F5F1EB" }}>
              Privacy
            </MuiLink>
          </Stack>
        </Stack>
      </Container>
    </footer>
  );
}
