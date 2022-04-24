import React from "react";
import styled from "styled-components";
import Gallery from "./Gallery";
import HeroSection from "./HeroSection";
import LiveProjects from "./LiveProjects";
import PopularProjects from "./PopularProjects";
import Contact from "./Contact";
function Landing() {
  return (
    <LandingContainer>
      <HeroSection />
      {/* <PopularProjects /> */}
      <Gallery />
      <LiveProjects />
      <Contact />
    </LandingContainer>
  );
}
export default Landing;

const LandingContainer = styled.div``;
