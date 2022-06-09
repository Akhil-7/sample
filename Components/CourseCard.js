import Image from "next/image";
import Router from "next/router";
import React from "react";
import { AiOutlineFieldTime } from "react-icons/ai";
import { BsFillStarFill } from "react-icons/bs";
import { MdOutlineVideoLibrary } from "react-icons/md";
import styled from "styled-components";
import img from "../public/assets/images//course-detials-bg-full.svg";

const CourseCard = ({ data }) => {
	const { id } = data;
	const { Name, teacher_name, duration, rating, total_lectures } =
		data.attributes;

	return (
		<Content className="col">
			<div className="card h-100">
				<div className="p-3">
					<Image
						src={img}
						className="card-img-top button"
						alt="img"
						onClick={() => Router.push(`/${id}`)}
					/>
				</div>
				<div className="card-body">
					<RatingContainer>
						{[1, 2, 3, 4, 5].map((item) => (
							<Rating key={item} rating={rating} index={item}>
								<BsFillStarFill className="icon" />
							</Rating>
						))}
					</RatingContainer>
					<h5 className="card-title" onClick={() => Router.push(`/${id}`)}>
						{Name}
					</h5>
					<p className="card-text">
						By <span>{teacher_name}</span>
					</p>
				</div>
				<div className="card-footer">
					<div>
						<AiOutlineFieldTime /> {duration}Hrs / <MdOutlineVideoLibrary />{" "}
						{total_lectures}
					</div>
				</div>
			</div>
		</Content>
	);
};

const Content = styled.div`
	color: #000;
	.card-body {
		.card-title {
			font-size: 25px;
			font-weight: 600;
			cursor: pointer;
		}
		span {
			color: var(--secondary);
			font-size: 1.3rem;
		}
	}
	.card-footer {
		background-color: transparent;
		border: 0;
	}
`;
const RatingContainer = styled.div`
	display: flex;
	gap: 5px;
	margin-bottom: 10px;
`;
const Rating = styled.div`
	.icon {
		color: ${(props) =>
			props.rating >= props.index ? "var(--secondary)" : "lightgray"};
	}
`;
export default CourseCard;
