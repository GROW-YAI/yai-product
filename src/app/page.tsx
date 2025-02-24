// import Image from "next/image";
import { Box} from "@mui/material"; 
import Navbar from "./components/NavBar";
import HeroSection from "./components/HeroCom";
import AboutInfo from "./components/AboutInfo";
import ContactForm from "./components/ContactForm";
import ProductGallery from './components/ProductGallary';
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonals";

const images = [
  { img: '/hoodies.png', title: 'Hoodie', description: 'Warm hoodie for all seasons'},
  { img: '/scafs.png', title: 'Scarf', description: 'Elegant scarf for all occasions' },
  { img: '/Kante1.png', title: 'Kente Cloth', description: 'Authentic Kente fabric'}, 
  { img: '/heropic2.png', title: 'Fashion Hero', description: 'Stand out with bold fashion' },
  { img: '/suit.png', title: 'Suit Collection', description: 'Classic suits for men'}, 
  { img: '/bag.png', title: 'Bag Collection', description: 'Fashion bag for all occasions '}
];


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
    <Box id="about-clients-section">
    <AboutInfo
      title="About Our Clients"
      description="Margaret’s Personalized Virtual Fashion Boutique is a revolutionary online platform that makes customized fashion accessible and eco-friendly. Clients can design their outfits using an intuitive virtual interface, ensuring their unique style and preferences are met. The boutique incorporates a 3D body measurement app to provide precise sizing, eliminating common fit issues. Customers can choose from a range of eco-friendly fabrics, supporting sustainable fashion."
      bgColor="#f6ece8"
      imageSrc="/heropic.png"
      reverse={false} 
      // bgColor="rgba(144, 104, 96, 0.2)" 
    />
    </Box>
    <Box id="about-products-section">
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
      <ProductGallery images={images} />
    </Box>
    <Box>
      <ContactForm/>
    </Box>
    <Box>
      <Testimonials/>
    </Box>

    <Footer/>

  </>
  );
}
