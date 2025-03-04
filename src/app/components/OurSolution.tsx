import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, Typography, Box, Stepper, Step, StepLabel, Container} from "@mui/material";
import Grid from "@mui/material/Grid2";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import RecyclingIcon from "@mui/icons-material/Recycling";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import StraightenIcon from "@mui/icons-material/Straighten";
import PaletteIcon from "@mui/icons-material/Palette";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const solutions = [
  { title: "3D Body Measurement App", details: "Get accurate measurements for a perfect fit every time.", icon: <ShoppingBagIcon sx={{ fontSize: 40, color: "#3C5652" }} /> },
  { title: "Eco-friendly Materials", details: "Choose sustainable fabrics and reduce your environmental impact.", icon: <RecyclingIcon sx={{ fontSize: 40, color: "#3C5652" }} /> },
  { title: "Affordable Packages", details: "Get high-quality, customized fashion without breaking the bank.", icon: <LocalOfferIcon sx={{ fontSize: 40, color: "#3C5652" }} /> },
];

const steps = [
  { label: "Upload Your Measurements", icon: <StraightenIcon /> },
  { label: "Choose Your Fabric", icon: <PaletteIcon /> },
  { label: "Get It Delivered", icon: <LocalShippingIcon /> },
];

const values = ["Custom Fit", "Sustainable Materials", "Affordable Pricing", "Fast Delivery"];

const OurSolution = () => {
  return (
    <Box id="OurSolution-section" sx={{ background: "#f6ece8", py: 10, textAlign: "center" }}>
        <Container>
        <Typography variant="h4" align="center" fontWeight="bold" sx={{mb:4}}>
        Our Solution
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {solutions.map((solution, index) => (
          <Grid key={index} size={{xs:12, sm:6, md:4}}  display="flex" justifyContent="center">
            <FlippingCard title={solution.title} details={solution.details} icon={solution.icon} />
          </Grid>
        ))}
      </Grid>

        </Container>
  

      <Container sx={{ mt: 10, textAlign: "center" }}>
        <Typography variant="h4" align="center" fontWeight="bold" sx={{mb:4}}>
          How It Works & Why Choose Us
        </Typography>
        <Grid container spacing={5} justifyContent="center" alignItems="center">
          <Grid size={{xs:12, sm:6}} display="flex" flexDirection="column" alignItems="center" >
            <Typography variant="h5" sx={{ color: "#3C5652", mb: 3 }}>
              How It Works
            </Typography>
            <Stepper orientation="vertical">
              {steps.map((step, index) => (
                <Step key={index}>
                 <StepLabel
  icon={step.icon}
  sx={{
    '& .MuiStepLabel-label': {
      fontSize: '1.1rem',
      fontWeight: 500,
    }
 
  }}
>
  {step.label}
</StepLabel>

                </Step>
              ))}
            </Stepper>
          </Grid>
          <Grid size={{xs:12, sm:6}} >
            <Typography variant="h5" sx={{ color: "#3C5652", mb: 3 }}>
              Why Choose Us
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              {values.map((value, index) => (
                <Grid key={index} size={{xs:12, sm:6}} >
                  <Card sx={{ p: 2, display: "flex", alignItems: "center", gap: 1, boxShadow: 3, borderRadius: "10px" }}>
                    <CheckCircleIcon sx={{ color: "#3C5652" }} />
                    <Typography>{value}</Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

interface FlippingCardProps {
  title: string;
  details: string;
  icon: React.ReactNode;
}

const FlippingCard = ({ title, details, icon }: FlippingCardProps) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <Box sx={{ width: 250, height: 200, perspective: "1000px", cursor: "pointer" }} onMouseEnter={() => setFlipped(true)} onMouseLeave={() => setFlipped(false)}>
      <motion.div style={{ position: "relative", width: "100%", height: "100%", transformStyle: "preserve-3d" }} animate={{ rotateY: flipped ? 180 : 0 }} transition={{ duration: 0.6 }}>
        <Box sx={{ position: "absolute", width: "100%", height: "100%", backfaceVisibility: "hidden" }}>
          <Card sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "white", color: "#3C5652", fontWeight: "bold", boxShadow: 3, borderRadius: "10px", p: 2 }}>
            {icon}
            <Typography variant="h6" align="center" sx={{ mt: 1 }}>
              {title}
            </Typography>
          </Card>
        </Box>
        <Box sx={{ position: "absolute", width: "100%", height: "100%", transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}>
          <Card sx={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#C08B80", color: "white", boxShadow: 3, borderRadius: "10px", p: 2 }}>
            <CardContent>
              <Typography variant="body2" align="center">
                {details}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </motion.div>
    </Box>
  );
};

export default OurSolution;
