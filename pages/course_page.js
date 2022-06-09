/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CourseCard from "../Components/CourseCard";
import PopularProjectsContext from "../public/Contexts/PopularProjectsContext";

function course_details() {
	const [currentSection, setCurrentSecion] = useState("Career");
	const [data, setData] = useState([]);
	const { courses } = React.useContext(PopularProjectsContext);

	useEffect(() => {
		const search = courses.filter(
			(item) => item.attributes.category == currentSection
		);
		setData(search);
	}, [currentSection]);

	return (
		<CourseDetailsContainer>
			<SwitchContainer currentSection={currentSection}>
				<div className="buttons">
					<p
						className="button"
						style={
							currentSection === "Career"
								? {
										backgroundColor: "var(--secondary)",
										color: "#Fff8f0",
								  }
								: {}
						}
						onClick={() => {
							setCurrentSecion("Career");
						}}
					>
						Career & Shortterm
					</p>
					<p
						className="button"
						style={
							currentSection === "Accounting"
								? {
										backgroundColor: "var(--secondary)",
										color: "#Fff8f0",
								  }
								: {}
						}
						onClick={() => {
							setCurrentSecion("Accounting");
						}}
					>
						Basic&Accounting
					</p>
					<p
						className="button"
						style={
							currentSection === "Programming"
								? {
										backgroundColor: "var(--secondary)",
										color: "#Fff8f0",
								  }
								: {}
						}
						onClick={() => {
							setCurrentSecion("Programming");
						}}
					>
						Programming
					</p>
					<p
						className="button"
						style={
							currentSection === "Designing"
								? {
										backgroundColor: "var(--secondary)",
										color: "#Fff8f0",
								  }
								: {}
						}
						onClick={() => {
							setCurrentSecion("Designing");
						}}
					>
						Web & Graphics
					</p>
				</div>
				<p className="course-page-title">Career & Short term</p>
				<CourseContainer>
					<div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-5">
						{data?.map((item) => (
							<CourseCard data={item} key={item.id} />
						))}
					</div>
				</CourseContainer>
			</SwitchContainer>
		</CourseDetailsContainer>
	);
}
export default course_details;

const CourseDetailsContainer = styled.div`
	padding-top: 100px;
`;
const SwitchContainer = styled.div`
	margin: 60px 0;

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

	.course-page-title {
		font-size: 48px;
		font-family: "IM Fell Double Pica", serif;
		margin: 50px auto !important;
		text-align: center;
	}
`;
const CourseContainer = styled.div`
	width: 80%;
	margin: auto;
`;
