import React from "react";
import Contact from "../Components/Landing/Contact";
import HeroSection from "../Components/Landing/HeroSection";
import HomeGallery from "../Components/Landing/HomeGallery";
import LiveProjects from "../Components/Landing/LiveProjects";
import PopularProjects from "../Components/Landing/PopularProjects";
import WhatsApp from "../Components/WhatsApp";
function Home() {
	return (
		<div>
			<WhatsApp />
			<HeroSection />
			<PopularProjects />
			<HomeGallery />
			<LiveProjects />
			<Contact />
		</div>
	);
}
export default Home;
