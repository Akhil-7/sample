import React from "react";
import styled from "styled-components";
import HomeGallery from "../Components/Landing/HomeGallery";
import HeroSection from "../Components/Landing/HeroSection";
import LiveProjects from "../Components/Landing/LiveProjects";
import PopularProjects from "../Components/Landing/PopularProjects";
import Contact from "../Components/Landing/Contact";
function Home() {
  return (
    <div>
      <HeroSection />
      <PopularProjects />
      <HomeGallery />
      <LiveProjects />
      <Contact />
    </div>
  );
}
export default Home;
