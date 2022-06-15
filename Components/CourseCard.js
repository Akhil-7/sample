import Image from "next/image";
import Router from "next/router";
import React from "react";
import styled from "styled-components";
import img from "../public/assets/images//course-detials-bg-full.svg";

const CourseCard = ({ data }) => {
	if (data === undefined) return null;

	const { id } = data;
	const { Name, key_points } = data.attributes;

	return (
		<Content className="col">
			<div className="card h-100 button" onClick={() => Router.push(`/${id}`)}>
				<div className="p-3">
					<Image src={img} className="card-img-top" alt="img" />
				</div>
				<div className="card-body">
					<h5 className="card-title">{Name}</h5>

					<div className="tagsContainer">
						{key_points.points.slice(0, 3).map((item) => (
							<p key={item} className="tags">
								{item}
							</p>
						))}
					</div>
				</div>
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
		height: 170px;
		.card-title {
			font-size: 20px;
			font-family: "tiemposBold", serif;
			font
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
		span {
			color: var(--secondary);
			font-size: 1.3rem;
		}
		.tagsContainer {
			display: flex;
			gap: 8px;
			flex-wrap: wrap;
			align-items: flex-start;
			margin-top: 1rem;
		}
		.tags {
			background-color: var(--dark-secondary);
			color: #fff;
			padding: 0.3rem 0.7rem;
			border-radius: 1rem;
			display: inline-block;
			font-size: 0.7rem;
		}
	}
	.card-footer {
		background-color: transparent;
		border: 0;
	}
`;
export default CourseCard;
