"use client";
import { Container, Typography, TextField, Button, IconButton, Link } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Facebook, Instagram } from "@mui/icons-material";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#302E2A", color: "#F5F1EB", padding: "40px 0" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">

    
          <Grid size={{ xs: 12, md: 4 }} display="flex" alignItems="center" gap={2}>
            <Image src="/logo.png" alt="Styles by MakG logo" width={50} height={50} />
            <div>
              <Typography variant="h6" sx={{ color: "#D4AF37", fontWeight: "bold" }}>
                Styles By MakG
              </Typography>
              <Typography variant="body2">
                Your go-to destination for the latest fashion trends and styles.
              </Typography>
            </div>
          </Grid>

     
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ color: "#D4AF37", fontWeight: "bold" }}>
              Quick Links
            </Typography>
            {[
              { label: "Home", id: "home-section" },
              { label: "Shop", id: "product-section" },
              { label: "About Our Products", id: "about-products-section" },
              { label: "About Our Clients", id: "about-clients-section" },
              { label: "Contact", id: "contact-section" },
              { label: "Testimonials", id: "testimonial-section" }
            ].map((item, index) => (
              <Link
                key={index}
                href={`#${item.id}`}
                color="inherit"
                underline="hover"
                display="block"
                sx={{ cursor: "pointer", color: "#F5F1EB", "&:hover": { color: "#D4AF37" } }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {item.label}
              </Link>
            ))}
          </Grid>

        
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ color: "#D4AF37", fontWeight: "bold" }}>
              Subscribe to our Newsletter
            </Typography>
            <TextField
              variant="outlined"
              placeholder="Enter your email"
              size="small"
              fullWidth
              sx={{
                backgroundColor: "#F5F1EB",
                borderRadius: "5px",
                mb: 1,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#D4AF37" },
                  "&:hover fieldset": { borderColor: "#D4AF37" },
                },
              }}
            />
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#D4AF37",
                color: "#000000",
                "&:hover": { backgroundColor: "#B8952E" },
              }}
            >
              Subscribe
            </Button>

          
            <Grid container spacing={1} sx={{ marginTop: "15px" }}>
              <Grid>
                <IconButton component="a" href="https://www.facebook.com/share/1GoaJHQse5/" sx={{ color: "#F5F1EB", "&:hover": { color: "#D4AF37" } }}>
                  <Facebook />
                </IconButton>
              </Grid>
              <Grid>
                <IconButton component="a" href="https://www.instagram.com/stylesbymakg/?igsh=MTg2eGFqOHhwcWkzNQ%3D%3D#-" sx={{ color: "#F5F1EB", "&:hover": { color: "#D4AF37" } }}>
                  <Instagram />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Typography variant="body2" align="center" sx={{ marginTop: "20px", color: "#F5F1EB" }}>
          © {new Date().getFullYear()} Styles By MakG. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
}
