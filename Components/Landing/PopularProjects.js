import Image from "next/image";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
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

	const { newCourses } = React.useContext(PopularProjectsContext);

	useEffect(() => {
		const search = newCourses.filter(
			(item) => item.attributes.category == section
		);
		setSwiperData(search);
	}, [section]);

	const SwiperCard = ({ data, id }) => {
		return (
			<SwiperCardContainer>
				<div className="back-card">
					<div className="back-card-innercontainer">
						<p className="about-title">Key features</p>
						<div className="description">
							<ul>
								{data.key_points.points.slice(0, 4).map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</div>
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
							<h6
								style={{ cursor: "pointer" }}
								onClick={() => Router.push(`/${id}`)}
							>
								{data?.Name}
							</h6>
						</div>
					</div>
				</div>
			</SwiperCardContainer>
		);
	};
	const breakpoints = {
		0: {
			slidesPerView: 1,
		},
		1024: {
			slidesPerView: 2,
		},
		1600: {
			slidesPerView: 3,
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
						slidesPerView={3}
						modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
						pagination={{ clickable: true }}
						updateOnWindowResize={true}
						breakpoints={breakpoints}
						grabCursor={true}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						loop={true}
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
		font-weight: 600;
	}
	.subtitle {
		margin-top: 20px;
		font-size: 15px;
		line-height: 20px;
		max-width: 600px;
		font-family: "tiempos", serif;
		letter-spacing: 1px;
	}
	p {
		font-family: "tiempos", serif;
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
		font-family: "tiempos", serif;
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
	width: 90%;
	margin: auto;
	@media (max-width: 700px) {
		width: 100%;
	}
	.about-title {
		font-size: 20px;
		font-family: "tiemposBold", serif;
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
				font-family: "tiemposBold", serif;
				margin-left: 10px !important;
			}
			.description {
				margin-top: 20px;
				padding-right: 5px;
				overflow: hidden;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 7;
			}
			ul {
				li {
					font-family: "tiempos", serif;
				}
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
				font-family: "IM Fell Double Pica", serif;
				font-weight: 600;
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
				h6 {
					font-family: "tiemposBold", serif;
				}
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
