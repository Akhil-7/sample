import Image from "next/image";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import { BsFillStarFill } from "react-icons/bs";
import styled from "styled-components";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import logo from "../../public/assets/images/popular-learning-logo.svg";
import PopularProjectsContext from "../../public/Contexts/PopularProjectsContext";

function PopularProjects() {
	const [section, setSection] = useState("Career");
	const [swiperData, setSwiperData] = useState([]);

	const { courses, newCourses } = React.useContext(PopularProjectsContext);
	console.log(newCourses);

	useEffect(() => {
		const search = courses.filter(
			(item) => item.attributes.category == section
		);
		setSwiperData(search);
	}, [section]);

	const SwiperCard = ({ data, id }) => {
		return (
			<SwiperCardContainer>
				<div className="back-card">
					<div className="back-card-innercontainer">
						<p className="about-title">About the course</p>
						<p className="description">{data?.About}</p>
						<p className="learn-more" onClick={() => Router.push(`/${id}`)}>
							Learn More
						</p>
					</div>
				</div>
				<div className="front">
					<div className="header">
						<p className="icon-container">
							<Image src={logo} alt="" />
						</p>
						<p className="card-title">{data?.Name}</p>
					</div>
					<div className="footer">
						<div className="footer-inner">
							<p className="">Lecture by {data?.teacher_name}</p>
							<div className="">
								<p>
									{data?.total_lectures} lectures ({data?.duration} Hours)
								</p>
							</div>

							<p className="rating">
								<BsFillStarFill />
								{data?.rating} ({data?.total_ratings})
							</p>
						</div>
					</div>
				</div>
			</SwiperCardContainer>
		);
	};
	const breakpoints = {
		// when window width is >= 320px
		0: {
			slidesPerView: 1,
		},
		// when window width is >= 640px
		1100: {
			slidesPerView: 2,
		},
	};

	return (
		<PopularProjectsContainer>
			<p className="title">Our popular learning programs</p>
			<p className="subtitle">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc
				gravida mauris viverra dui viverra tempus. Risus tempus nisi cursus sem
				scelerisque at.
			</p>
			<SliderContainer section={section}>
				<div className="buttons">
					<p
						className="button"
						style={
							section === "Career"
								? {
										backgroundColor: "var(--secondary)",
										color: "#Fff8f0",
								  }
								: {}
						}
						onClick={() => {
							setSection("Career");
						}}
					>
						Career & Shortterm
					</p>
					<p
						className="button"
						style={
							section === "Accounting"
								? {
										backgroundColor: "var(--secondary)",
										color: "#Fff8f0",
								  }
								: {}
						}
						onClick={() => {
							setSection("Accounting");
						}}
					>
						Basic&Accounting
					</p>
					<p
						className="button"
						style={
							section === "Programming"
								? {
										backgroundColor: "var(--secondary)",
										color: "#Fff8f0",
								  }
								: {}
						}
						onClick={() => {
							setSection("Programming");
						}}
					>
						Programming
					</p>
					<p
						className="button"
						style={
							section === "Designing"
								? {
										backgroundColor: "var(--secondary)",
										color: "#Fff8f0",
								  }
								: {}
						}
						onClick={() => {
							setSection("Designing");
						}}
					>
						Web & Graphics
					</p>
				</div>
				<div className="d-block">
					<Swiper
						className="mySwiper"
						slidesPerView={2}
						centeredSlides={true}
						modules={[Navigation, Pagination, Scrollbar, A11y]}
						pagination={{ clickable: true }}
						updateOnWindowResize={true}
						breakpoints={breakpoints}
						grabCursor={true}
					>
						{swiperData.map((item) => (
							<SwiperSlide key={item.id}>
								<SwiperCard data={item.attributes} id={item.id} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<p
					className="view-all mx-auto"
					onClick={() => Router.push("/course_page")}
				>
					View All Courses
				</p>
			</SliderContainer>
		</PopularProjectsContainer>
	);
}
export default PopularProjects;

const PopularProjectsContainer = styled.div`
	background-color: #fff8f0;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	margin: 0 auto;
	text-align: center;
	padding: 80px 0;
	.title {
		font-size: 40px;
		letter-spacing: 5px;
		font-family: "IM Fell Double Pica", serif;
	}
	.subtitle {
		margin-top: 20px;
		font-size: 15px;
		line-height: 20px;
		max-width: 600px;
		font-family: tiempos;
		letter-spacing: 1px;
	}
`;
const SliderContainer = styled.div`
	margin-top: 60px;
	width: 80%;
	.buttons {
		display: flex;
		flex-wrap: wrap;
		gap: 40px;
		justify-content: center;
	}
	.button {
		font-size: 17px;
		border: 1px solid black;
		border-radius: 6px;
		padding: 10px 25px;
		cursor: pointer;
		transition: all 0.3s;
		:hover {
			background-color: var(--secondary);
			color: #fff8f0;
		}
	}
	.mySwiper {
		max-width: 75vw;
		margin: 50px auto;
		min-height: 450px;
		max-height: fit-content;
		@media (max-width: 1380px) {
			max-width: 90vw;
		}
	}
	.view-all {
		padding: 5px 15px;
		background-color: var(--secondary);
		border-radius: 6px;
		color: #fff8f0;
		width: fit-content;
		margin: 0 auto;
		font-size: 14px;
		cursor: pointer;
	}
`;
const SwiperCardContainer = styled.div`
	width: 80%;
	margin: auto;
	@media (max-width: 700px) {
		width: 100%;
	}
	.about-title {
		font-size: 20px;
		font-weight: bold;
	}
	position: relative;
	.back-card {
		background-color: var(--primary);
		min-height: 400px;
		max-height: fit-content;
		width: 80%;
		margin-left: auto;
		//
		@media (max-width: 700px) {
			margin-top: 320px;
			width: 100%;
			border-bottom-right-radius: 50px;
		}
		//
		.back-card-innercontainer {
			width: 50%;
			margin-left: auto;
			text-align: left;
			//
			@media (max-width: 700px) {
				width: 100%;
			}
			//
			.about-title {
				padding-top: 20px;
				font-weight: bold;
				margin-left: 10px !important;
			}
			.description {
				margin-top: 20px;
				width: 90%;
				margin-left: 10px !important;
				overflow: hidden;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 7;
			}
			.learn-more {
				position: absolute;
				bottom: 50px;
				right: 50px;
				font-weight: bolder;
				cursor: pointer;
				margin-left: 10px !important;
				color: var(--secondary);
			}
		}
	}
	.front {
		background-color: var(--secondary);
		color: #fff8f0;
		position: absolute;
		top: 10%;
		height: 320px;
		width: 60%;
		//
		@media (max-width: 700px) {
			top: -320px;
			width: 100%;
		}
		//
		border-top-left-radius: 50px;
		.header {
			display: flex;
			width: 80%;
			margin: 40px auto 0;
			.icon-container {
				background-color: #fff8f0;
				border-radius: 10px;
				height: fit-content;
				padding: 5px;
			}
			.card-title {
				margin-left: 20px !important;
				text-align: left;
				font-size: 17px;
			}
		}
		.footer {
			position: absolute;
			bottom: 0;
			width: 100%;
			text-align: left;
			font-size: 13px;
			background-color: var(--dark-secondary);
			.footer-inner {
				padding: 10px 20px 20px 10px;
			}
			.rating {
				position: absolute;
				right: 10%;
				bottom: 10px;
				display: flex;
				align-items: center;
				gap: 5px;
			}
		}
	}
`;
