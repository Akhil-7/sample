import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import PopularProjectsContext from "../public/Contexts/PopularProjectsContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	const popularProjectsData = {
		career: [
			{
				title: " Diploma in Career",
				teacher: "Shailesh Mahindra",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue amet, porttitor elementum mi ultrices eu arcu viverra nunc. Lectus mauris vivamus duis dictumst urna mattis.",
				numberOfLect: 70,
				hours: 200,
				ratingStar: 4.5,
				ratingNumber: 24,
			},
			{
				title: " Diploma in Career",
				teacher: "Shailesh Mahindra",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue amet, porttitor elementum mi ultrices eu arcu viverra nunc. Lectus mauris vivamus duis dictumst urna mattis.",
				numberOfLect: 70,
				hours: 200,
				ratingStar: 4.5,
				ratingNumber: 24,
			},
			{
				title: " Diploma in Career",
				teacher: "Shailesh Mahindra",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue amet, porttitor elementum mi ultrices eu arcu viverra nunc. Lectus mauris vivamus duis dictumst urna mattis.",
				numberOfLect: 70,
				hours: 200,
				ratingStar: 4.5,
				ratingNumber: 24,
			},
			{
				title: " Diploma in Career",
				teacher: "Shailesh Mahindra",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue amet, porttitor elementum mi ultrices eu arcu viverra nunc. Lectus mauris vivamus duis dictumst urna mattis.",
				numberOfLect: 70,
				hours: 200,
				ratingStar: 4.5,
				ratingNumber: 24,
			},
			{
				title: " Diploma in Career",
				teacher: "Shailesh Mahindra",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue amet, porttitor elementum mi ultrices eu arcu viverra nunc. Lectus mauris vivamus duis dictumst urna mattis.",
				numberOfLect: 70,
				hours: 200,
				ratingStar: 4.5,
				ratingNumber: 24,
			},
			{
				title: " Diploma in Career",
				teacher: "Shailesh Mahindra",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue amet, porttitor elementum mi ultrices eu arcu viverra nunc. Lectus mauris vivamus duis dictumst urna mattis.",
				numberOfLect: 70,
				hours: 200,
				ratingStar: 4.5,
				ratingNumber: 24,
			},
		],
		accounting: [
			{
				title: " Diploma in Accounting",
				teacher: "Shailesh Mahindra",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue amet, porttitor elementum mi ultrices eu arcu viverra nunc. Lectus mauris vivamus duis dictumst urna mattis.",
				numberOfLect: 70,
				hours: 200,
				ratingStar: 4.5,
				ratingNumber: 24,
			},
			{
				title: " Diploma in Accounting",
				teacher: "Shailesh Mahindra",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue amet, porttitor elementum mi ultrices eu arcu viverra nunc. Lectus mauris vivamus duis dictumst urna mattis.",
				numberOfLect: 70,
				hours: 200,
				ratingStar: 4.5,
				ratingNumber: 24,
			},
			{
				title: " Diploma in Accounting",
				teacher: "Shailesh Mahindra",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue amet, porttitor elementum mi ultrices eu arcu viverra nunc. Lectus mauris vivamus duis dictumst urna mattis.",
				numberOfLect: 70,
				hours: 200,
				ratingStar: 4.5,
				ratingNumber: 24,
			},
			{
				title: "Diploma in Accounting",
				teacher: "Shailesh Mahindra",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue amet, porttitor elementum mi ultrices eu arcu viverra nunc. Lectus mauris vivamus duis dictumst urna mattis.",
				numberOfLect: 70,
				hours: 200,
				ratingStar: 4.5,
				ratingNumber: 24,
			},
			{
				title: "Diploma in Accounting",
				teacher: "Shailesh Mahindra",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue amet, porttitor elementum mi ultrices eu arcu viverra nunc. Lectus mauris vivamus duis dictumst urna mattis.",
				numberOfLect: 70,
				hours: 200,
				ratingStar: 4.5,
				ratingNumber: 24,
			},
			{
				title: "Diploma in Accounting",
				teacher: "Shailesh Mahindra",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue amet, porttitor elementum mi ultrices eu arcu viverra nunc. Lectus mauris vivamus duis dictumst urna mattis.",
				numberOfLect: 70,
				hours: 200,
				ratingStar: 4.5,
				ratingNumber: 24,
			},
		],
		programming: [
			{
				title: "Diploma in Programming",
				teacher: "Shailesh Mahindra",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue amet, porttitor elementum mi ultrices eu arcu viverra nunc. Lectus mauris vivamus duis dictumst urna mattis.",
				numberOfLect: 70,
				hours: 200,
				ratingStar: 4.5,
				ratingNumber: 24,
			},
			{
				title: "Diploma in Programming",
				teacher: "Shailesh Mahindra",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue amet, porttitor elementum mi ultrices eu arcu viverra nunc. Lectus mauris vivamus duis dictumst urna mattis.",
				numberOfLect: 70,
				hours: 200,
				ratingStar: 4.5,
				ratingNumber: 24,
			},
			{
				title: "Diploma in Programming",
				teacher: "Shailesh Mahindra",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue amet, porttitor elementum mi ultrices eu arcu viverra nunc. Lectus mauris vivamus duis dictumst urna mattis.",
				numberOfLect: 70,
				hours: 200,
				ratingStar: 4.5,
				ratingNumber: 24,
			},
			{
				title: "Diploma in Programming",
				teacher: "Shailesh Mahindra",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue amet, porttitor elementum mi ultrices eu arcu viverra nunc. Lectus mauris vivamus duis dictumst urna mattis.",
				numberOfLect: 70,
				hours: 200,
				ratingStar: 4.5,
				ratingNumber: 24,
			},
			{
				title: "Diploma in Programming",
				teacher: "Shailesh Mahindra",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue amet, porttitor elementum mi ultrices eu arcu viverra nunc. Lectus mauris vivamus duis dictumst urna mattis.",
				numberOfLect: 70,
				hours: 200,
				ratingStar: 4.5,
				ratingNumber: 24,
			},
			{
				title: "Diploma in Programming",
				teacher: "Shailesh Mahindra",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue amet, porttitor elementum mi ultrices eu arcu viverra nunc. Lectus mauris vivamus duis dictumst urna mattis.",
				numberOfLect: 70,
				hours: 200,
				ratingStar: 4.5,
				ratingNumber: 24,
			},
		],
		web: [
			{
				title: "Diploma in Web Graphics",
				teacher: "Shailesh Mahindra",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue amet, porttitor elementum mi ultrices eu arcu viverra nunc. Lectus mauris vivamus duis dictumst urna mattis.",
				numberOfLect: 70,
				hours: 200,
				ratingStar: 4.5,
				ratingNumber: 24,
			},
			{
				title: "Diploma in Web Graphics",
				teacher: "Shailesh Mahindra",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue amet, porttitor elementum mi ultrices eu arcu viverra nunc. Lectus mauris vivamus duis dictumst urna mattis.",
				numberOfLect: 70,
				hours: 200,
				ratingStar: 4.5,
				ratingNumber: 24,
			},
			{
				title: "Diploma in Web Graphics",
				teacher: "Shailesh Mahindra",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue amet, porttitor elementum mi ultrices eu arcu viverra nunc. Lectus mauris vivamus duis dictumst urna mattis.",
				numberOfLect: 70,
				hours: 200,
				ratingStar: 4.5,
				ratingNumber: 24,
			},
			{
				title: "Diploma in Web Graphics",
				teacher: "Shailesh Mahindra",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue amet, porttitor elementum mi ultrices eu arcu viverra nunc. Lectus mauris vivamus duis dictumst urna mattis.",
				numberOfLect: 70,
				hours: 200,
				ratingStar: 4.5,
				ratingNumber: 24,
			},

			{
				title: "Diploma in Web Graphics",
				teacher: "Shailesh Mahindra",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue amet, porttitor elementum mi ultrices eu arcu viverra nunc. Lectus mauris vivamus duis dictumst urna mattis.",
				numberOfLect: 70,
				hours: 200,
				ratingStar: 4.5,
				ratingNumber: 24,
			},

			{
				title: "Diploma in Web Graphics",
				teacher: "Shailesh Mahindra",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue amet, porttitor elementum mi ultrices eu arcu viverra nunc. Lectus mauris vivamus duis dictumst urna mattis.",
				numberOfLect: 70,
				hours: 200,
				ratingStar: 4.5,
				ratingNumber: 24,
			},
		],
	};

	const [courses, setCourses] = useState([]);

	useEffect(() => {
		fetch("http://localhost:1337/api/courses")
			.then((res) => res.json())
			.then((result) => setCourses(result.data));
	}, []);

	return (
		<PopularProjectsContext.Provider value={{ popularProjectsData, courses }}>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</PopularProjectsContext.Provider>
	);
}

export default MyApp;
