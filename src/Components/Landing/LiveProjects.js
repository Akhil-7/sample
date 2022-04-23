import React from "react";
import styled from "styled-components";
import img from "../../assets/images/live-projects.svg";
function LiveProjects() {
  return (
    <LiveProjectsContainer>
      <Upper>
        <div className="title">
          Live <div>Projects</div>
        </div>
        <div className="content">
          <p className="para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo sit
            porta mauris bibendum suspendisse felis, non et cursus. Vestibulum
            nulla non interdum amet, ornare lacinia sagittis, nullam. Donec
            aliquet rhoncus leo neque tortor, faucibus amet egestas.{" "}
          </p>
          <p className="button">More Info</p>
        </div>
      </Upper>
      <Lower>
        <div className="bar"></div>
        <div className="image-container">
          <img src={img} alt="" />
        </div>
      </Lower>
    </LiveProjectsContainer>
  );
}
export default LiveProjects;

const LiveProjectsContainer = styled.div`
  background-color: #f1f1f1;
  width: 100%;
  position: relative;
  padding: 100px 0;
`;
const Upper = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  .title {
    font-size: 70px;
    min-width: 50%;
    letter-spacing: 10px;
  }
  .content {
    width: 450px;
  }
  .para {
    width: 100%;
    font-family: "Cardo";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
  }
  .button {
    margin-top: 30px;
    background-color: #1d1e2c;
    width: fit-content;
    margin-left: auto;
    color: #fff;
    padding: 5px 40px;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
  }
`;
const Lower = styled.div`
  .bar {
    background-color: #d6df59;
    width: 80%;
    height: 213px;
    margin: 0 auto;
    position: relative;
    top: 200px;
  }
  .image-container {
    display: flex;
    justify-content: center;
    width: 60%;
    margin: 0 auto;
    position: relative;
    top: -130px;
    z-index: 1;
  }
`;
