import React, { useState } from "react";
import styled from "styled-components";
function course_details() {
  const [currentSection, setCurrentSecion] = useState("career");
  return (
    <CourseDetailsContainer>
      <SwitchContainer currentSection={currentSection}>
        <div className="buttons">
          <p
            className="button"
            style={
              currentSection === "career"
                ? {
                    backgroundColor: "var(--secondary)",
                    color: "#Fff8f0",
                  }
                : {}
            }
            onClick={() => {
              setCurrentSecion("career");
            }}
          >
            Career & Shortterm
          </p>
          <p
            className="button"
            style={
              currentSection === "accounting"
                ? {
                    backgroundColor: "var(--secondary)",
                    color: "#Fff8f0",
                  }
                : {}
            }
            onClick={() => {
              setCurrentSecion("accounting");
            }}
          >
            Basic&Accounting
          </p>
          <p
            className="button"
            style={
              currentSection === "programming"
                ? {
                    backgroundColor: "var(--secondary)",
                    color: "#Fff8f0",
                  }
                : {}
            }
            onClick={() => {
              setCurrentSecion("programming");
            }}
          >
            Programming
          </p>
          <p
            className="button"
            style={
              currentSection === "web"
                ? {
                    backgroundColor: "var(--secondary)",
                    color: "#Fff8f0",
                  }
                : {}
            }
            onClick={() => {
              setCurrentSecion("web");
            }}
          >
            Web & Graphics
          </p>
        </div>
        <p className="course-page-title">Career & Short term</p>
        <CourseContainer>
          <div className="course-card">
            <p> Diploma in Financial Accounting (DFA)</p>
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
    }
  }
`;
