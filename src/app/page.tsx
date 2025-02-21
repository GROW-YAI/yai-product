// import Image from "next/image";
import { Box} from "@mui/material"; 
import Navbar from "./components/NavBar";
import HeroSection from "./components/HeroCom";
import AboutInfo from "./components/AboutInfo";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <>
    <Box sx={{ position: "relative", height: "100vh", overflow: "hidden" }}>

    <Box sx={{ position: "absolute", width: "100%", zIndex: 10,marginTop:2 }}>
      <Navbar />
    </Box>
    <HeroSection
      title="StyleSphere"
      subtitle="Elevate Your Style, Define Your Sphere"
      backgroundImage="/heropic.png"
    />
      </Box>
    <Box>
    <AboutInfo
      title="About Our Clients"
      description="Margaret’s Personalized Virtual Fashion Boutique is a revolutionary online platform that makes customized fashion accessible and eco-friendly. Clients can design their outfits using an intuitive virtual interface, ensuring their unique style and preferences are met. The boutique incorporates a 3D body measurement app to provide precise sizing, eliminating common fit issues. Customers can choose from a range of eco-friendly fabrics, supporting sustainable fashion."
      bgColor="#f6ece8"
      imageSrc="/heropic.png"
      reverse={false} 
      // bgColor="rgba(144, 104, 96, 0.2)" 
    />
    </Box>
    <Box>
    <AboutInfo
      title="About Our Products"
      description="StyleSphere offers affordable and flexible pricing packages, ensuring inclusivity for different budgets. Clients also enjoy convenient home and office delivery, along with mobile styling consultations, making the entire fashion experience seamless, from design to doorstep."
      // bgColor="#f6ece8"
      imageSrc="/heropic.png"
      reverse={true} 
      bgColor="rgba(144, 104, 96, 0.2)" 
    />
    </Box>
    <Box>
      <ContactForm/>
    </Box>

  </>
  );
}
