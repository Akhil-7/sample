import Image from "next/image";
import React from "react";
import { AiOutlineFieldTime } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";
import { MdOutlineVideoLibrary } from "react-icons/md";
import styled from "styled-components";
import CourseCard from "../Components/CourseCard";
import Rating from "../Components/Rating";
import img7 from "../public/assets/images/course-detials-bg-full.svg";

function CourseDetail({ course, courses }) {
	if (course === undefined || courses === undefined) return null;

	const {
		Name,
		teacher_name,
		About,
		duration,
		key_points,
		rating,
		total_lectures,
		total_ratings,
	} = course;

	const Content = () => (
		<div className="content">
			<div className="mx-auto">
				<Rating rating={rating} />
			</div>
			<div>
				<h1>{Name}</h1>
				<p>{About.slice(0, 50).trim()}...</p>
				<p className="mt-3">
					By- <span>{teacher_name}</span>
				</p>
			</div>
			<p>
				<MdOutlineVideoLibrary /> <span>{total_lectures}</span> Lectures /{" "}
				<AiOutlineFieldTime /> <span>{duration}</span> Hrs Duration
			</p>
		</div>
	);

	const Description = () => (
		<div>
			<p className="tag">Details</p>
			<h1>Description</h1>
			<p>{About}</p>

			<h3>What is Included</h3>
			<div>
				{key_points && key_points.points.map((item, index) => (
					<Item key={index}>
						<p>
							<BsCheck className="icon" />
						</p>
						<p>{item}</p>
					</Item>
				))}
			</div>
		</div>
	);

	return (
		<>
		{course !== null && 
		<CourseDetails>
		<Banner>
			<div className="bannerImage">
				<Image src={img7} alt="bg" />
			</div>
			<div className="contentContainer">
				<Content />
			</div>
		</Banner>
		<DetailsContainer>
			<Details>
				<Description />
			</Details>
			<SimilarCourses>
				<p className="tag">Details</p>
				<h1>Similar Courses</h1>
				<div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-5 pt-3">
					{courses && courses.map((item) => (
						<CourseCard data={item} key={item.id} />
					))}
				</div>
			</SimilarCourses>
		</DetailsContainer>
	</CourseDetails>
		}
		</>
	);
}

const CourseDetails = styled.div`
	margin-top: 77px;
	h1 {
		font-family: "IM Fell Double Pica", serif;
		font-size: 45px;
		font-weight: 500;
		@media (max-width: 700px) {
			font-size: 27px;
		}
	}

	h3 {
		font-family: "IM Fell Double Pica", serif;
		font-size: 27px;
		font-weight: 500;
		margin-top: 15px;
		@media (max-width: 700px) {
			font-size: 1rem;
		}
	}

	p {
		font-family: "IM Fell Double Pica", serif;
		font-size: 1rem;
		@media (max-width: 700px) {
			font-size: 0.8rem;
		}
	}
	span {
		font-family: "IM Fell Double Pica", serif;
		font-size: 25px;
		font-weight: 500;
		color: var(--primary);
		@media (max-width: 700px) {
			font-size: 17px;
		}
	}
`;
const Banner = styled.div`
	position: relative;
	height: 70%;

	.bannerImage {
		img {
			min-width: 100vw !important;
			max-height: calc(70vh - 77px) !important;
			object-fit: cover;
		}
	}
	.contentContainer {
		position: absolute;
		top: 0;
		width: 100%;
		height: calc(100% - 7px);
		background: #000000aa;
		color: #fff;
	}
	.content {
		width: 80%;
		margin: auto;
		text-align: center;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;

		.rating {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 5px;
			span {
				font-family: "IM Fell Double Pica", serif;
				font-size: 30px;
				font-weight: 500;
				color: var(--primary);
				margin-top: -11px;
				@media (max-width: 700px) {
					font-size: 20px;
				}
			}
		}
	}
`;
const DetailsContainer = styled.div`
	background: #fff8f0;
	margin-top: -7px;
	color: #000;
	padding: 25px 0;
	.tag {
		letter-spacing: 5px;
		text-transform: uppercase;
		font-size: 10px;
	}
`;
const Details = styled.div`
	width: 80%;
	margin: 25px auto;
`;
const Item = styled.div`
	display: flex;
	.icon {
		font-size: 1.2rem;
	}
`;
const SimilarCourses = styled.div`
	width: 80%;
	margin: 50px auto 25px;
`;

export async function getStaticPaths() {
	const res = await fetch("http://65.20.75.248:1337/api/courses");
	const result = await res.json();
	const data = result.data.map((item) => ({
		params: { id: `${item.id}` },
	}));

	return {
		paths: data,
		fallback: true,
	};
}

export async function getStaticProps({ params }) {
	const res = await fetch("http://65.20.75.248:1337/api/courses");
	const results = await res.json();

	const course = results.data[params.id - 1];
	const otherCourses = results.data.filter((item) => item.id != params.id);

	return {
		props: { course: course.attributes, courses: otherCourses },

		revalidate: 1,
	};
}

export default CourseDetail;
