import React from "react";
import styled from "styled-components";
import Gallery from "../Components/Landing/Gallery";
import HeroSection from "../Components/Landing/HeroSection";
import LiveProjects from "../Components/Landing/LiveProjects";
import PopularProjects from "../Components/Landing/PopularProjects";
import Contact from "../Components/Landing/Contact";
function Home() {
  return (
    <div>
      <HeroSection />
      <PopularProjects />
      <Gallery />
      <LiveProjects />
      <Contact />
    </div>
  );
}
export default Home;
