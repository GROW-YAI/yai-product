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
  { img: '/maxi.png', title: 'Elegant Maxi Dress', description: ' A flowing Ankara maxi dress with bold patterns, perfect for formal and cultural events.'},
  { img: '/africansuit.png', title: 'Classic African Suit', description: ' A tailored Ankara suit combining tradition with contemporary elegance, ideal for special occasions.' },
  { img: '/dashiki.png', title: 'Casual Dashiki Look', description: 'A relaxed yet fashionable dashiki top with bold prints, paired with jeans for everyday wear.'}, 
  { img: '/short.png', title: 'Vibrant Short Dress', description: 'A flared African print dress with rich colors, designed for a fun and trendy look.' },
  { img: '/jumpsuit.png', title: 'Chic Ankara Jumpsuit', description: 'A stylish, fitted jumpsuit that blends tradition with modern fashion. Great for both casual and semi-formal wear.'}, 
  { img: '/shirt.png', title: 'Stylish Ankara Shirt', description: 'A modern African print shirt paired with fitted trousers, perfect for a smart-casual look.Fashion bag for all occasions '}
];


export default function Home() {
  return (
    <>
    <Box sx={{ position: "relative", height: "100vh", overflow: "hidden" }}>

    <Box sx={{ position: "fixed", top: 0, width: "100%", zIndex: 10, backgroundColor: "white", boxShadow: 2 }}>
  <Navbar />
</Box>

    <HeroSection
      title="Styles By MakG"
      subtitle="Elevate Your Style, Define Your Sphere"
      backgroundImage="/heropic.png"
    />
      </Box>
    <Box id="about-clients-section">
    <AboutInfo
      title="About Inovator"
      description="Margaret’s Personalized Virtual Fashion Boutique is a revolutionary online platform that makes customized fashion accessible and eco-friendly. Clients can design their outfits using an intuitive virtual interface, ensuring their unique style and preferences are met. The boutique incorporates a 3D body measurement app to provide precise sizing, eliminating common fit issues. Customers can choose from a range of eco-friendly fabrics, supporting sustainable fashion."
      bgColor="#f6ece8"
      imageSrc="/inovator.png"
      reverse={false} 
      // bgColor="rgba(144, 104, 96, 0.2)" 
    />
    </Box>
    <Box id="about-products-section">
    <AboutInfo 
      title="About Our Products"
      description="Styles By MakG offers affordable and flexible pricing packages, ensuring inclusivity for different budgets. Clients also enjoy convenient home and office delivery, along with mobile styling consultations, making the entire fashion experience seamless, from design to doorstep."
      // bgColor="#f6ece8"
      imageSrc="/product1.png"
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
