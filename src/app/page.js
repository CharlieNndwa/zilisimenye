// import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services'
import Stats from './components/Stats';
// import Link from 'next/link'; 
import About from "./components/About";
// import OurMission from "./components/OurMission";
import Donation from "./components/Donation";
import ContactUs from "./components/ContactUs";
import BackToTopBtn from "./components/BackToTopBtn";

export default function Home() {
  return (
    <>
      
      <Hero />
      <About/>
      <Services/>
      <Stats/>
      <ContactUs/>
      <BackToTopBtn/>
    </>
  );
}
