import React from "react";
import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";
import studentLogo from "../../public/assets/images/student.svg";
import onlineClassLogo from "../../public/assets/images/online-class.svg";
import heroImg from "../../public/assets/images/hero.png";
import Image from "next/image";
function HeroSection() {
  // const color = React.useContext(PopularProjectsContext);

  return (
    <HeroSectionContainer>
      <Hero bg={heroImg}>
        <HeroSectionContent>
          <p className="title">#WE HELP YOU BUILD YOUR CAREER!</p>
          <p className="sub-title">
            Choose a career you love & you will never have to work again in your
            life.
          </p>
          <p className="button">
            Choose the Program
            <span>
              <AiOutlineArrowRight />
            </span>
          </p>
        </HeroSectionContent>
      </Hero>
      <CardsContainer>
        <CardsInnerContainer className="row mx-auto py-5">
          <div className="col-12 col-lg-4">
            <Card className="card1 mx-auto mt-lg-5">
              <div className="circle">
                <div className="image-container ">
                  <Image src={studentLogo} alt="" />
                </div>
              </div>
              <p className="title">Get Certificate</p>
            </Card>
          </div>
          <div className="col-12 col-lg-4">
            {/* <div className="col-4"> */}
            <Card className="card2 mx-auto my-5 my-lg-0">
              <div className="circle">
                <div className="image-container ">
                  <Image src={onlineClassLogo} alt="" />
                </div>
              </div>
              <p className="title">Live online lectures and webinars</p>
            </Card>
          </div>
          <div className="col-12 col-lg-4">
            {/* <div className="col-4"> */}
            <Card className="card3 mx-auto mt-lg-5">
              <div className="circle">
                <div className="image-container">
                  <Image src={studentLogo} alt="" />
                </div>
              </div>
              <p className="title">Expert Instructors</p>
            </Card>
          </div>
        </CardsInnerContainer>
      </CardsContainer>
    </HeroSectionContainer>
  );
}
export default HeroSection;

const HeroSectionContainer = styled.div`
  width: 100%;
`;
const Hero = styled.div`
  background-image: url(${(props) => props.bg.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
`;
const HeroSectionContent = styled.div`
  max-width: 50%;
  font-family: "Poppins";
  font-style: normal;
  padding-top: 15%;
  padding-left: 10%;

  .title {
    font-weight: 600;
    font-size: 48px;
    line-height: 57px;
    letter-spacing: 0.19em;
    font-family: "IM Fell Double Pica", serif;
  }
  @media (max-width: 700px) {
    .title {
      font-size: 20px;
      line-height: 31px;
      margin-top: 100px !important;
    }
    .sub-title {
      font-size: 14px !important;
      line-height: 20px !important;
      letter-spacing: 0.05em;
      margin: 30px 0px !important;
    }
    .button {
      padding: 10px 20px !important;
    }
  }
  .sub-title {
    font-weight: 300;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: 0.1em;
    max-width: 90%;
    font-family: "IM Fell Double Pica", serif;
  }
  .button {
    margin-top: 50px;
    padding: 10px 60px;
    background-color: #ffffff;
    width: fit-content;
    display: flex;
    cursor: pointer;
    span {
      display: flex;
      align-items: center;
      margin-left: 5px;
    }
  }
`;
const CardsContainer = styled.div`
  background-color: var(--secondary);
  height: auto;
  font-family: "Poppins";
  font-style: normal;
  padding: 30px 0px;
`;
const CardsInnerContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  .card1,
  // .card3 {
  //   margin-top: 120px;
  // }
  // .card2 {
  //   margin-top: 60px;
  // }
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 220px;
  height: 208px;
  background-color: #ffffff;
  border-radius: 20px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  text-align: center;
  padding: 10px;
  .circle {
    transition: all 0.3s ease-in-out;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: var(--primary);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    position: relative;
  }
  .image-container {
    background-color: #fff;
    width: 80%;
    height: 80%;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      min-width: 60px;
    }
  }
  .title {
    margin-top: 10px;
    font-weight: 600;
  }

  &:hover {
    background-color: var(--primary);

    .circle {
      background-color: var(--secondary);
    }
    .title,
    .sub-title {
      color: var(--secondary);
    }
  }
`;
