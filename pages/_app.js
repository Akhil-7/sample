import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import PopularProjectsContext from "../public/Contexts/PopularProjectsContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps, courses }) {
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
	const [scroll, setScroll] = useState(false);

	return (
		<PopularProjectsContext.Provider
			value={{ popularProjectsData, courses, scroll, setScroll }}
		>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</PopularProjectsContext.Provider>
	);
}

export default MyApp;

MyApp.getInitialProps = async () => {
	const res = await fetch("http://localhost:1337/api/courses");
	const data = await res.json();

	const getData = (a) => {
		const arr = [];
		for (let item of a.data) {
			arr.push({
				id: item.id,
				title: item.attributes.Name,
				teacher: item.attributes.teacher_name,
				description: item.attributes.About,
				numberOfLect: item.attributes.total_lectures,
				hours: item.attributes.duration,
				ratingStar: item.attributes.rating,
				ratingNumber: item.attributes.total_ratings,
			});
		}
		return arr;
	};

	const courses = await getData(data);

	return { courses };
};
