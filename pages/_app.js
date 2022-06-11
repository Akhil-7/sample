import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import PopularProjectsContext from "../public/Contexts/PopularProjectsContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps, courses, newCourses }) {
	const [scroll, setScroll] = useState(false);

	return (
		<PopularProjectsContext.Provider
			value={{
				courses,
				newCourses,
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
	const res2 = await fetch(
		"http://localhost:1337/api/updated-courses?pagination[pageSize]=10000"
	);
	const data2 = await res2.json();

	return { courses: data.data, newCourses: data2.data };
};
