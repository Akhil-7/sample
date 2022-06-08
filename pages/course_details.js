import Image from "next/image";
import React from "react";
import { BsCheck, BsFillStarFill } from "react-icons/bs";
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
			<DetailsContainer>
				<Details>
					<p className="tag">Details</p>
					<h1>Description</h1>
					<p>
						{
							"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, nulla quidem voluptates quia molestias beatae consequuntur iste veritatis temporibus eligendi, cumque aliquid alias nemo facere consectetur magni aspernatur maiores laudantium!"
						}
					</p>

					<h3>What is Included</h3>
					<Item>
						<p>
							<BsCheck className="icon" />
						</p>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Inventore, nam?
						</p>
					</Item>
					<Item>
						<p>
							<BsCheck className="icon" />
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
							suscipit.
						</p>
					</Item>
					<Item>
						<p>
							<BsCheck className="icon" />
						</p>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Repellat, aperiam!
						</p>
					</Item>
					<Item>
						<p>
							<BsCheck className="icon" />
						</p>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
							quas.
						</p>
					</Item>
				</Details>
			</DetailsContainer>
		</CourseDetails>
	);
};

export default CourseDetail;
const CourseDetails = styled.div`
	margin-top: 77px;
	h1 {
		font-family: "IM Fell Double Pica", serif;
		font-size: 40px;
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
// font-family: "IM Fell Double Pica", serif;
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
const DetailsContainer = styled.div`
	background: var(--secondary);
	margin-top: -7px;
	color: #fff;
	padding: 25px 0;
`;
const Details = styled.div`
	width: 80%;
	margin: auto;
	.tag {
		letter-spacing: 5px;
		text-transform: uppercase;
		font-size: 10px;
	}
`;
const Item = styled.div`
	display: flex;
	.icon {
		font-size: 1.2rem;
	}
`;
