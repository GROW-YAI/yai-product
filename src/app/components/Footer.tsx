
"use client";
import { Container,Typography, TextField, Button, IconButton, Link } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Facebook, Instagram, Twitter, Pinterest } from "@mui/icons-material";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#3C5652", color: "#F5F1EB", padding: "40px 0" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
    
          <Grid size={{ xs: 12, md:4}}>
            <Typography variant="h6" gutterBottom style={{ color: "#C08B80" }}>
              Fashionista
            </Typography>
            <Typography variant="body2">
              Your go-to destination for the latest fashion trends and styles.
            </Typography>
          </Grid>

    
          <Grid size={{ xs: 12, md:4}}>
  <Typography variant="h6" gutterBottom style={{ color: "#C08B80" }}>
    Quick Links
  </Typography>

  <Link href="#home-section" 
   color="inherit"
   underline="hover"
   display="block"
   onClick={(e) => {
     e.preventDefault();
     document.getElementById("home-section")?.scrollIntoView({ behavior: "smooth" });
   }}>
    Home
  </Link>

  <Link
    href="#product-section"
    color="inherit"
    underline="hover"
    display="block"
    onClick={(e) => {
      e.preventDefault();
      document.getElementById("product-section")?.scrollIntoView({ behavior: "smooth" });
    }}
  >
    Shop
  </Link>

  <Link
  href="#about-products-section"
  color="inherit"
  underline="hover"
  display="block"
  onClick={(e) => {
    e.preventDefault();
    document.getElementById("about-products-section")?.scrollIntoView({ behavior: "smooth" });
  }}
>
  About Our Products
</Link>

<Link
  href="#about-clients-section"
  color="inherit"
  underline="hover"
  display="block"
  onClick={(e) => {
    e.preventDefault();
    document.getElementById("about-clients-section")?.scrollIntoView({ behavior: "smooth" });
  }}
>
  About Our Clients
</Link>


  <Link
    href="#contact-section"
    color="inherit"
    underline="hover"
    display="block"
    onClick={(e) => {
      e.preventDefault();
      document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" });
    }}
  >
    Contact
  </Link>
  <Link
    href="#testimonial-section"
    color="inherit"
    underline="hover"
    display="block"
    onClick={(e) => {
      e.preventDefault();
      document.getElementById("testimonial-section")?.scrollIntoView({ behavior: "smooth" });
    }}
  >
    Testimonials
  </Link>
</Grid>


         
          <Grid size={{ xs: 12, md:4}}>
            <Typography variant="h6" gutterBottom style={{ color: "#C08B80" }}>
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
                  "& fieldset": { borderColor: "#C08B80" },
                  "&:hover fieldset": { borderColor: "#C08B80" },
                },
              }}
            />
            <Button variant="contained" fullWidth sx={{ backgroundColor: "#C08B80", color: "#F5F1EB" }}>
              Subscribe
            </Button>
            <div style={{ marginTop: "15px" }}>
              <IconButton component="a" href="https://facebook.com" sx={{ color: "#F5F1EB" }}>
                <Facebook />
              </IconButton>
              <IconButton component="a" href="https://instagram.com" sx={{ color: "#F5F1EB" }}>
                <Instagram />
              </IconButton>
              <IconButton component="a" href="https://twitter.com" sx={{ color: "#F5F1EB" }}>
                <Twitter />
              </IconButton>
              <IconButton component="a" href="https://pinterest.com" sx={{ color: "#F5F1EB" }}>
                <Pinterest />
              </IconButton>
            </div>
          </Grid>
        </Grid>

    
        <Typography variant="body2" align="center" style={{ marginTop: "20px", color: "#F5F1EB" }}>
          © {new Date().getFullYear()} Fashionista. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
}

