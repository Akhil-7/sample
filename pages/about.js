import React, { useEffect, useState } from "react";
// import '../styles/globals.css'
import Image from "next/image";
import img10 from "../public/assets/images/Rectangle 735.png";
import icon1 from "../public/assets/images/group-svgrepo-com 1.png";
import icon2 from "../public/assets/images/Vector (1).png";
import icon3 from "../public/assets/images/Vector (2).png";
import icon4 from "../public/assets/images/Vector (3).png";
import icon5 from "../public/assets/images/Vector (4).png";
import icon6 from "../public/assets/images/Vector (5).png";
import icon7 from "../public/assets/images/Vector (6).png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import $ from 'jquery';

export default function about() {


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    // dots:false
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },

    ],
  };


  return (

    <div className="about">
      <div className="home">
        <div className="data py-4">
          {/* <div className="">
            <h1 className="">
            ABOUT <br /> THE LCC
            </h1>
            <p className="py-1">An ISO 9001:2015 Certified Company</p>
          </div> */}
          <div className="bg-w">
            <div className="l_img">
              <Image src={img10} alt="" />
            </div>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Potenti
              maecenas ipsum ultricies est, mattis nisl faucibus ut sed. Et
              consectetur suscipit lectus gravida faucibus et vitae arcu, cras.
              Laoreet orci turpis elit lobortis facilisi orci. Elit nec quis
              libero, odio. Neque, facilisis dui dolor augue est eget purus
              enim. Eget quis risus integer massa netus. Blandit rutrum nunc
              magna lorem. Dictumst sagittis velit habitasse ac nisl viverra vel
              ultricies.
            </p>
          </div>
          {/* <div className="row w-100">
            <div className="col-6">
              <div className="">
                <h1 className="l_heding py-1">
                  ABOUT <br /> THE LCC
                </h1>
                <p className="l_subheding py-1">
                  An ISO 9001:2015 Certified Company
                </p>
              </div>
              <div className="l_img">
                <Image src={img10} alt="" />
              </div>
            </div>
            <div className="col-6">
              <div className="r_box">
                <div className="bg-w">
                  <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Potenti maecenas ipsum ultricies est, mattis nisl faucibus
                    ut sed. Et consectetur suscipit lectus gravida faucibus et
                    vitae arcu, cras. Laoreet orci turpis elit lobortis facilisi
                    orci. Elit nec quis libero, odio. Neque, facilisis dui dolor
                    augue est eget purus enim. Eget quis risus integer massa
                    netus. Blandit rutrum nunc magna lorem. Dictumst sagittis
                    velit habitasse ac nisl viverra vel ultricies.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {/*Facts  & Figures */}
      <div className="Facts py-5 px-0 px-sm-4">
        <div className="pl-5 ml-5">
          <h1 className="text-md-start text-center text-light">Facts & Figures</h1>
          <div className="">
            <div
              className="main_row_containt"
              style={{ background: "#1D1E2C", marginLeft: "auto" }}
            >
              <div className="row main_row m-0">
                <div className="col-3  d-flex flex-column justify-content-center align-items-center py-2">
                  <div className="h-50">
                    <Image src={icon1} alt="" />
                  </div>
                  <p className="card_text h-50">
                    5000+ <br />
                    <span>
                      <b>Students</b>
                    </span>
                  </p>
                </div>
                <div className="col-3 d-flex flex-column justify-content-center align-items-center py-2">
                  <div className="h-50">
                    <Image src={icon2} alt="" />
                  </div>
                  <p className="card_text h-50">
                    100+ <br />
                    <span>
                      <b>Courses</b>
                    </span>
                  </p>
                </div>
                <div className="col-3 d-flex flex-column justify-content-center align-items-center py-2">
                  <div className="h-50">
                    <Image src={icon3} alt="" />
                  </div>
                  <p className="card_text h-50">
                    <b>Graduates</b>
                  </p>
                </div>
                <div className="col-3 d-flex flex-column justify-content-center align-items-center py-2">
                  <div className="h-50">
                    <Image src={icon4} alt="" />
                  </div>
                  <p className="card_text h-50">
                    100% <br />
                    <span>
                      <b>Satisfaction</b>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Capabilities */}
      <div className="Capabilities_main">
        <div className="Capabilities m-auto">
          <h1 className="text-center py-5">Our Capabilities</h1>
          <p>
            LCC’s advisory committee of IT professionals studies the hot market
            trends consulting with leading computer technology providers in
            order to revise the offered courses/subjects every year. Curricula
            are then updated to reflect current and future technology drifts and
            demands. LCCs computer training program splits into subsequent four
            major sectors:
          </p>
          <div className="row mx-auto py-5">
            <div className="col-12 col-lg-4">
              <div className="card1 mx-auto my-5 my-lg-0">
                <div className="circle">
                  <div className="image-Our-Capabilities d-flex justify-content-center align-items-center mx-auto">
                    <Image src={icon5} alt="" />
                  </div>
                </div>
                <h3 className="font-weight-bold text-center mt-3">EDUCATION</h3>
                <p className="title text-center p-0">Software Training</p>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              {/* <div className="col-4"> */}
              <div className="card2 mx-auto  mt-lg-5">
                <div className="circle">
                  <div className="image-Our-Capabilities d-flex justify-content-center align-items-center mx-auto">
                    <Image src={icon6} alt="" />
                  </div>
                </div>
                <h3 className="font-weight-bold text-center mt-3">LIAD</h3>

                <p className="title text-center p-0">Multimedia Training</p>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              {/* <div className="col-4"> */}
              <div className="card3 mx-auto my-5 my-lg-0">
                <div className="circle">
                  <div className="image-Our-Capabilities d-flex justify-content-center align-items-center mx-auto">
                    <Image src={icon7} alt="" />
                  </div>
                </div>
                <h3 className="font-weight-bold text-center mt-3">
                  SOFT SOLUTIONS
                </h3>
                <p className="title text-center p-0">Software Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our story */}
      <div className="Our_story">
        <div className="Our_story_sub">
          <h1 className="text-light text-center py-5 my-4">Our story</h1>


          <Slider {...settings}>
            <div className="py-4 px-3 position-relative">

              <div className="card_Our_story">
                <p>
                  Founded in Cochin back in the year 1992, LCC started its
                  journey as a premier computer coaching centre and later
                  advanced into one of the most reputedbrand for computer
                  learning throughout India. LCC has surpassed victory in
                  finding and refining those hidden talents in our pupils, to
                  deliver thousands of IT prosto the evergreen IT Industry every
                  year.Whether you are a novice, a mediocre or a professional in
                  computer technologies, we have the right course for you to
                  advance and follow anambitious career path.
                </p>
              </div>
            </div>
            <div className="py-4 px-3 position-relative">

              <div className="card_Our_story">
                <p>
                  Technology as you can imagine, advances every second. It feeds
                  upon itself i.e., technology makes more technology possible.
                  LCC’s expert academicians and certified faculties interact
                  with our leading computer technology company allies
                  like(include LCCs alliances here for eg.Java, Red Hat,
                  Microsoft and Oracle)to come up with relevantcertification
                  courses (short term, long term, professional, and career
                  courses) after thorough market research and study.LCC is also
                  the training partner to World famous MNC TOTAL SOLUTIONS INC,
                  CHICAGO, USA, and its allied Company EZMRX Bangalore.Our
                  curriculum features the largest offering of computer course
                  varieties to keep you updated with cutting edge technology
                  through expert and experienced training faculties. This will
                  help the students pursue a job of their dreams with better
                  career prospects and industry best salaries.
                </p>
              </div>
            </div>
            <div className="py-4 px-3 position-relative">

              <div className="card_Our_story">
                <p>
                  That is not all to it;we also mould students into professional
                  characters for interviews through job fairs, placement
                  workshops, seminars, presentations and various other
                  personality development programs. To sum it up, in spite of
                  being the right platform to build your sharp IT knowledge, LCC
                  also supports your first step to career by introducing you to
                  the complex technology job sector through placement
                  opportunities to reputed companie
                </p>
              </div>
            </div>
            <div className="py-4 px-3 position-relative">

              <div className="card_Our_story">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis sit commodi aliquam ullam vitae architecto alias, similique rem repellendus voluptas eius culpa nesciunt voluptate laborum quas consequatur quis odio.
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nobis earum vero saepe velit aut ipsam dolor? Excepturi modi, voluptas quisquam soluta natus quia nam illum ipsam corrupti nesciunt harum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos et, quae quod sit a beatae voluptates aliquam debitis at perferendis, aspernatur enim deserunt accusantium fugit qui vero quasi iure adipisci?
                </p>
              </div>
            </div>


          </Slider>

          {/* <div className="row m-0 h-75">
            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-end">
              <div className="card_Our_story">
                <p>
                  Founded in Cochin back in the year 1992, LCC started its
                  journey as a premier computer coaching centre and later
                  advanced into one of the most reputedbrand for computer
                  learning throughout India. LCC has surpassed victory in
                  finding and refining those hidden talents in our pupils, to
                  deliver thousands of IT prosto the evergreen IT Industry every
                  year.Whether you are a novice, a mediocre or a professional in
                  computer technologies, we have the right course for you to
                  advance and follow anambitious career path.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-end">
              <div className="card_Our_story">
                <p>
                  Technology as you can imagine, advances every second. It feeds
                  upon itself i.e., technology makes more technology possible.
                  LCC’s expert academicians and certified faculties interact
                  with our leading computer technology company allies
                  like(include LCCs alliances here for eg.Java, Red Hat,
                  Microsoft and Oracle)to come up with relevantcertification
                  courses (short term, long term, professional, and career
                  courses) after thorough market research and study.LCC is also
                  the training partner to World famous MNC TOTAL SOLUTIONS INC,
                  CHICAGO, USA, and its allied Company EZMRX Bangalore.Our
                  curriculum features the largest offering of computer course
                  varieties to keep you updated with cutting edge technology
                  through expert and experienced training faculties. This will
                  help the students pursue a job of their dreams with better
                  career prospects and industry best salaries.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-end">
              <div className="card_Our_story">
                <p>
                  That is not all to it;we also mould students into professional
                  characters for interviews through job fairs, placement
                  workshops, seminars, presentations and various other
                  personality development programs. To sum it up, in spite of
                  being the right platform to build your sharp IT knowledge, LCC
                  also supports your first step to career by introducing you to
                  the complex technology job sector through placement
                  opportunities to reputed companie
                </p>
              </div>
            </div>
          </div> */}
          {/* <div className="row mx-3 my-4 d-none d-md-flex">
            <div className="col-4 p-0 d-flex justify-content-center align-items-end">
              <div className="card_Our_story_line">
                <div className=""></div>
              </div>
            </div>
            <div className="col-4 p-0 d-flex justify-content-center align-items-end">
              <div className="card_Our_story_line">
                <div className=""></div>
              </div>
            </div>
            <div className="col-4 p-0 d-flex justify-content-center align-items-end">
              <div className="card_Our_story_line">
                <div className=""></div>
              </div>
            </div>
          </div> */}
          <div className="Our_story_bottom_div ">
            Come join us and innovate to multiply world’s Technology by your
            skill, who knows, tomorrow we might get a chance to teach your
            invention!
          </div>
        </div>
      </div >
    </div>
  )
}
