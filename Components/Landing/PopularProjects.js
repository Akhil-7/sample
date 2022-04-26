import React, { useEffect, useState } from "react";
import styled from "styled-components";

import logo from "../../public/assets/images/popular-learning-logo.svg";
import { BsFillStarFill } from "react-icons/bs";
import PopularProjectsContext from "../../public/Contexts/PopularProjectsContext";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

function PopularProjects() {
  const [section, setSection] = useState("career");
  const popularProjects = React.useContext(PopularProjectsContext);
  const [swiperData, setSwiperData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSwiperData(popularProjects.popularProjectsData[section]);
    }, 200);
  });
  const SwiperCard = ({ data }) => {
    return (
      <SwiperCardContainer>
        <div className="back">
          <div className="back-innercontainer">
            <p className="about-title">About the course</p>
            <p className="description">{data.description}</p>
            <p className="learn-more">Learn More</p>
          </div>
        </div>
        <div className="front">
          <div className="header">
            <p className="icon-container">
              <Image src={logo} alt="" />
            </p>
            <p className="card-title">{data.title}</p>
          </div>
          <div className="footer">
            <p className="px-4">Lecture by {data.teacher}</p>
            <div className="footer-inner">
              <div className="">
                <p>
                  {data.numberOfLect} lectures ({data.hours} Hours)
                </p>
              </div>

              <p className="rating">
                <BsFillStarFill />
                {data.ratingStar} ({data.ratingNumber})
              </p>
            </div>
          </div>
        </div>
      </SwiperCardContainer>
    );
  };

  return (
    <PopularProjectsContainer>
      <p className="title">Our popular learning programs</p>
      <p className="subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc
        gravida mauris viverra dui viverra tempus. Risus tempus nisi cursus sem
        scelerisque at.
      </p>
      <SliderContainer section={section}>
        <div className="buttons">
          <p
            className="button"
            style={
              section === "career"
                ? {
                    backgroundColor: "var(--secondary)",
                    color: "#fff",
                  }
                : {}
            }
            onClick={() => {
              setSection("career");
            }}
          >
            Career & Shortterm
          </p>
          <p
            className="button"
            style={
              section === "accounting"
                ? {
                    backgroundColor: "var(--secondary)",
                    color: "#fff",
                  }
                : {}
            }
            onClick={() => {
              setSection("accounting");
            }}
          >
            Basic&Accounting
          </p>
          <p
            className="button"
            style={
              section === "programming"
                ? {
                    backgroundColor: "var(--secondary)",
                    color: "#fff",
                  }
                : {}
            }
            onClick={() => {
              setSection("programming");
            }}
          >
            Programming
          </p>
          <p
            className="button"
            style={
              section === "web"
                ? {
                    backgroundColor: "var(--secondary)",
                    color: "#fff",
                  }
                : {}
            }
            onClick={() => {
              setSection("web");
            }}
          >
            Web & Graphics
          </p>
        </div>
        <div className="d-none d-lg-block">
          <Swiper
            className="mySwiper"
            slidesPerView={2}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            pagination={{ clickable: true }}
          >
            {swiperData.map((data, index) => {
              return (
                <SwiperSlide slidesPerView={2} key={index}>
                  <SwiperCard data={data} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="d-block d-lg-none">
          <Swiper
            className="mySwiper"
            slidesPerView={1}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            pagination={{ clickable: true }}
          >
            {swiperData.map((data, index) => {
              return (
                <SwiperSlide slidesPerView={1} key={index}>
                  <SwiperCard data={data} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <p className="view-all mx-auto">View All Courses</p>
      </SliderContainer>
    </PopularProjectsContainer>
  );
}
export default PopularProjects;

const PopularProjectsContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  text-align: center;
  padding: 80px 0;
  .title {
    font-size: 40px;
    letter-spacing: 5px;
    font-family: "IM Fell Double Pica", serif;
  }
  .subtitle {
    margin-top: 20px;
    font-size: 15px;
    line-height: 20px;
    max-width: 600px;
  }
`;
const SliderContainer = styled.div`
  margin-top: 50px;
  .buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
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
      color: #fff;
    }
  }
  .mySwiper {
    max-width: 75vw;
    margin: 50px auto;
  }
  .view-all {
    padding: 5px 15px;
    background-color: var(--secondary);
    border-radius: 6px;
    color: #fff;
    width: fit-content;
    margin: 0 auto;
    font-size: 14px;
    cursor: pointer;
  }
`;
const SwiperCardContainer = styled.div`
  width: 75%;
  @media (max-width: 700px) {
    width: 100%;
  }
  .about-title {
    font-size: 20px;
    font-weight: bold;
  }
  position: relative;
  .back {
    background-color: var(--primary);
    height: 400px;
    width: 70%;
    margin-left: auto;
    .back-innercontainer {
      width: 50%;
      margin-left: auto;
      text-align: left;
      .about-title {
        padding-top: 20px;
        font-weight: bold;
      }
      .description {
        margin-top: 20px;
        width: 90%;
      }
      .learn-more {
        // position: absolute;
        bottom: 50px;
        color: white;
        right: 50px;
        font-weight: bold;
        cursor: pointer;
      }
    }
  }
  .front {
    background-color: var(--secondary);
    color: white;
    position: absolute;
    top: 10%;
    height: 80%;
    width: 60%;
    border-top-left-radius: 50px;
    .header {
      display: flex;
      width: 80%;
      margin: 40px auto 0;
      .icon-container {
        background-color: white;
        border-radius: 10px;
        height: fit-content;
        padding: 5px;
      }
      .card-title {
        margin-left: 40px;
        text-align: left;
        font-size: 17px;
      }
    }
    .footer {
      position: absolute;
      bottom: 0;
      width: 100%;
      text-align: left;
      font-size: 13px;
      background-color: var(--dark-secondary);
      .footer-inner {
        padding: 10px 20px;
      }
      // .rating {
      //   position: absolute;
      //   right: 10%;
      //   bottom: 10px;
      //   display: flex;
      //   align-items: center;
      //   gap: 5px;
      // }
    }
  }
`;
