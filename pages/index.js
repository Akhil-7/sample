import React from "react";
import styled from "styled-components";
import GalleryComp from "../Components/Landing/GalleryComp";
import HeroSection from "../Components/Landing/HeroSection";
import LiveProjects from "../Components/Landing/LiveProjects";
import PopularProjects from "../Components/Landing/PopularProjects";
import Contact from "../Components/Landing/Contact";
function Home() {
  return (
    <div>
      <HeroSection />
      <PopularProjects />
      <GalleryComp />
      <LiveProjects />
      <Contact />
    </div>
  );
}
export default Home;
