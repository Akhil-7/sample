import React from "react";
import Image from "next/image";
import img7 from "../public/assets/images/course-detials-bg-full.svg";
import img8 from "../public/assets/images/Vector (8).png";
import styled from "styled-components";

function course_details() {
  return (
    <CourseDetails>
      <div className="img_con"></div>
      <div className="row  main_course_details m-0">
        <div className="part1 col-4 p-0">
          <h1 className="heding_text_tally">
            <b>Tally </b>
          </h1>
          <h1 className="heding_text_Workshop">Workshop</h1>
          <div className="part1-content p-0 p-sm-4">
            <p className="heding_tex_we">We Offer You </p>
            <p className="heding_tex_we_sub">Online Class</p>
            <p className="heding_tex_we_sub">Group Classes</p>
            <p className="heding_tex_we_sub">One to One Teaching</p>
            <p className="heding_tex_we_sub">Experienced Faculty</p>
          </div>
        </div>
        <div className="back col-4 p-0">
          <div className="img-container">{<Image src={img7} alt="" />}</div>
        </div>
        <div className="part3 col-4 p-2 pt-5">
          <div className="book_div mx-auto mt-5">
            <Image src={img8} alt="" />
          </div>
          <h4 className="text-center text-light pt-3 title">
            <b>About the course</b>
          </h4>
          <p className="text-light heding_tex_we_sub py-2">
            About the course Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed fermentum in consectetur amet lacus sit gravida.
            Pellentesque odio amet convallis orci, in eget. Et suspendisse
            pretium habitant viverra. Habitasse pharetra est eu, accumsan. Velit
            quis nunc praesent pellentesque. Nec nulla sit id in at hac nisl
            ultricies faucibus. Lorem arcu venenatis nunc, suspendisse purus
            massa id.
          </p>
        </div>
      </div>
    </CourseDetails>
  );
}

export default course_details;
const CourseDetails = styled.div`
  row {
    min-height: 150vh !important;
    position: relative;
  }
  .part1 {
    background-color: #153955 !important;
    color: #fff8f0;
    h1 {
      font-family: "IM Fell Double Pica", serif;
    }
    .heding_text_Workshop {
      color: #784638;
    }
    .part1-content {
      margin-left: 80px !important;
      .heding_tex_we {
        padding-top: 40px !important;
        font-family: "IM Fell Double Pica", serif;
      }
    }
  }
  .part3 {
    background-color: #784638;
    color: #fff8f0;
    padding: 50px !important;

    h4 {
      margin-top: 40px;
      font-family: "IM Fell Double Pica", serif;
    }
    p {
      font-size: 18px;
    }
  }
  .back {
    position: relative;
    .img-container {
      position: absolute;
      bottom: 0;
      img {
        width: 90%;
        margin: auto;
      }
      height: fit-content;
      margin-bottom: 0;
    }
  }
`;
