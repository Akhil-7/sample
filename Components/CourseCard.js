import Image from "next/image";
import Router from "next/router";
import React from "react";
import styled from "styled-components";
import img from "../public/assets/images//course-detials-bg-full.svg";

const CourseCard = ({ data }) => {
	if (data === undefined) return null;
	const { id } = data;
	// const { Name, teacher_name, duration, rating, total_lectures } =
	// 	data.attributes;
	const { Name, duration } = data.attributes;

	return (
		<Content className="col">
			<div className="card h-100 button" onClick={() => Router.push(`/${id}`)}>
				<div className="p-3">
					<Image src={img} className="card-img-top" alt="img" />
				</div>
				<div className="card-body">
					{/* <Rating rating={rating} /> */}
					<h5 className="card-title">{Name}</h5>
					{/* <p className="card-text">
						By <span>{teacher_name}</span>
					</p> */}
				</div>
				{/* <div className="card-footer">
					<div>
						<AiOutlineFieldTime /> {duration}Hrs / <MdOutlineVideoLibrary />{" "}
						{total_lectures}
					</div>
				</div> */}
			</div>
		</Content>
	);
};

const Content = styled.div`
	color: #000;
	.button {
		padding: 0px !important;
		border: 0 !important;
	}
	.card-body {
		.card-title {
			font-size: 25px;
			font-weight: 500;
			font-family: IM Fell Double Pica, serif;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
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
export default CourseCard;
