import Image from "next/image";
import React from "react";
import { BsFillStarFill } from "react-icons/bs";
// import img8 from "../public/assets/images/Vector (8).png";
import styled from "styled-components";
import img7 from "../public/assets/images/course-detials-bg-full.svg";

const CourseDetail = () => {
	return (
		<CourseDetails>
			<Banner>
				<div className="bannerImage">
					<Image src={img7} alt="bg" />
				</div>
				<div className="contentContainer">
					<div className="content">
						<h1>{"Course Name"}</h1>
						<div>
							<p>
								By- <span>{"Teacher Name"}</span>
							</p>
							<p>
								<span>{"20"}</span> Lectures in <span>{"10"}</span> Hours
							</p>
						</div>
						<p className="rating">
							<BsFillStarFill />
							<div>{"4"}</div> ({"200"})
						</p>
					</div>
				</div>
			</Banner>
		</CourseDetails>
	);
};

export default CourseDetail;
const CourseDetails = styled.div`
	margin-top: 77px;
`;

const Banner = styled.div`
	position: relative;
	min-height: 100%;

	.bannerImage {
		img {
			min-width: 100vw !important;
			max-height: calc(100vh - 77px) !important;
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
		h1 {
			font-family: "IM Fell Double Pica", serif;
			font-size: 40px;
			font-weight: 500;
			@media (max-width: 700px) {
				font-size: 27px;
			}
		}
		p {
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
		.rating {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 5px;
			div {
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
