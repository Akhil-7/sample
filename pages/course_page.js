/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PopularProjectsContext from "../public/Contexts/PopularProjectsContext";
function course_details() {
	const [currentSection, setCurrentSecion] = useState("Career course");
	const [data2, setData2] = useState({});
	const { courses } = React.useContext(PopularProjectsContext);

	useEffect(() => {
		setTimeout(() => {
			const search = courses.find((item) => item.title == currentSection);
			setData2(search);
		}, 200);
	});

	// const data = {
	// 	career: ["Diploma in career "],
	// 	accounting: ["Diploma in Financial Accounting (DFA)"],
	// 	programming: ["Diploma in programming"],
	// 	web: ["Diploma in web"],
	// };
	const Content = ({ id, title }) => (
		<div>
			<Link href={`/${id}`} passHref>
				<p>{title}</p>
			</Link>
		</div>
	);
	return (
		<CourseDetailsContainer>
			<SwitchContainer currentSection={currentSection}>
				<div className="buttons">
					<p
						className="button"
						style={
							currentSection === "Career course"
								? {
										backgroundColor: "var(--secondary)",
										color: "#Fff8f0",
								  }
								: {}
						}
						onClick={() => {
							setCurrentSecion("Career course");
						}}
					>
						Career & Shortterm
					</p>
					<p
						className="button"
						style={
							currentSection === "Accounting course"
								? {
										backgroundColor: "var(--secondary)",
										color: "#Fff8f0",
								  }
								: {}
						}
						onClick={() => {
							setCurrentSecion("Accounting course");
						}}
					>
						Basic&Accounting
					</p>
					<p
						className="button"
						style={
							currentSection === "Programing course"
								? {
										backgroundColor: "var(--secondary)",
										color: "#Fff8f0",
								  }
								: {}
						}
						onClick={() => {
							setCurrentSecion("Programing course");
						}}
					>
						Programming
					</p>
					<p
						className="button"
						style={
							currentSection === "Designing course"
								? {
										backgroundColor: "var(--secondary)",
										color: "#Fff8f0",
								  }
								: {}
						}
						onClick={() => {
							setCurrentSecion("Designing course");
						}}
					>
						Web & Graphics
					</p>
				</div>
				<p className="course-page-title">Career & Short term</p>
				<CourseContainer>
					<div className="course-card ">
						{/* {data[currentSection].map((item, index) => (
							<p key={index}>{item}</p>
						))} */}
						<Content id={data2.id} title={data2.title} />
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
	margin-top: 60px;

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
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin-top: 50px;
	.course-card {
		width: 180px;
		height: 122px;
		background-color: var(--primary);
		display: flex;
		justify-content: center;
		align-items: center;
		p {
			font-size: 15px;
			opacity: 0.9;
			font-family: tiempos;
			text-align: center;
			cursor: pointer;
		}
	}
`;
