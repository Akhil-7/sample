import React from "react";
import styled from "styled-components";
import img from "../../public/assets/images/live-projects.svg";
import Image from "next/image";
function LiveProjects() {
  return (
    <div className="" style={{ backgroundcolor: "#f1f1f1" }}>
      <LiveProjectsContainer>
        <div className="row m-0">
          <div className="col-12 col-lg-6">
            <Upper className="d-block d-xl-flex">
              <div className="col-12 col-xl-6">
                <div className="title text-center text-lg-start">
                  Live <div>Projects</div>
                </div>
              </div>
              <div className="col-12 col-xl-6">
                <p className="para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo
                  sit porta mauris bibendum suspendisse felis, non et cursus.
                  Vestibulum nulla non interdum amet, ornare lacinia sagittis,
                  nullam. Donec aliquet rhoncus leo neque tortor, faucibus amet
                  egestas.{" "}
                </p>
                <p className="button">More Info</p>
              </div>
            </Upper>
          </div>
          <div className="col-12 col-lg-6">
            <Lower>
              <div className="bar"></div>
              <div className="image-container">
                <Image src={img} alt="" />
              </div>
            </Lower>
          </div>
        </div>
      </LiveProjectsContainer>
    </div>
  );
}
export default LiveProjects;

const LiveProjectsContainer = styled.div`
  width: 90%;
  margin: auto;
  position: relative;
  padding-top: 100px;
`;
const Upper = styled.div`
  width: 80%;
  margin: 0 auto;
  .title {
    font-size: 50px;
    letter-spacing: 10px;
    font-family: "IM Fell Double Pica", serif;
  }
  .content {
    width: 100%;
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
