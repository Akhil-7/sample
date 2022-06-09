import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import PopularProjectsContext from "../public/Contexts/PopularProjectsContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps, courses }) {
	const [scroll, setScroll] = useState(false);

	return (
		<PopularProjectsContext.Provider
			value={{
				courses,
				scroll,
				setScroll,
			}}
		>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</PopularProjectsContext.Provider>
	);
}

export default MyApp;

MyApp.getInitialProps = async () => {
	const res = await fetch("http://65.20.75.248:1337/api/courses");
	const data = await res.json();

	return { courses: data.data };
};
