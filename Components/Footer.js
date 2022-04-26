import React from "react";
import styled from "styled-components";
import { MdLocationOn } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMobile } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";

function Footer() {
  return (
    <FooterContainer>
      <div className="row m-0 d-none d-lg-flex">
        <div className="col-12 col-xl-4 d-flex justify-content-between my-2">
          <div className="section1">
            <p className="sec-title" style={{ fontWeight: "900" }}>
              LCC
            </p>
            <p className="sec-title" style={{ fontWeight: "900" }}>
              An ISO 9001:2015 Certified Company
            </p>
            <p>Copyright 2022 lcccochin.com</p>
          </div>
          <div className="section2">
            <p>Terms and condition</p>
            <p>Privacy Policy</p>
            <p>Security</p>
          </div>
        </div>
        <div className="col-12 col-xl-5 my-2">
          <div className="section3">
            <p className="sec-title" style={{ fontWeight: "900" }}>
              Addresses
            </p>
            <div className="row">
              <div className="col-6">
                <div className="sec3-item d-flex">
                  <p className="icon">{<MdLocationOn />}</p>
                  <p>
                    3rd floor, Dharmodayam Bldgs Marine Drive, Cochin-31, Kerala
                  </p>
                </div>
                <div className="sec3-item d-flex">
                  <p className="icon">{<BsFillTelephoneFill />}</p>
                  <p>091 484 2355545, 2380489</p>
                </div>
                <div className="sec3-item d-flex">
                  <p className="icon">{<AiOutlineMobile />}</p>
                  <p>091 94470 42425</p>
                </div>
                <div className="sec3-item d-flex">
                  <p className="icon">{<GrMail />}</p>
                  <p>info@lcccochin.com</p>
                </div>
              </div>
              <div className="col-6">
                <div className="section4">
                  <div className="sec3-item d-flex">
                    <p className="icon">{<MdLocationOn />}</p>
                    <p>
                      Above Gold Fort Jewellery By pass Jn., Aluva-1, Kerala
                    </p>
                  </div>
                  <div className="sec3-item d-flex">
                    <p className="icon">{<BsFillTelephoneFill />}</p>
                    <p>091 484 2629996, 2630102</p>
                  </div>
                  <div className="sec3-item d-flex">
                    <p className="icon">{<AiOutlineMobile />}</p>
                    <p>091 94460 29996</p>
                  </div>
                  <div className="sec3-item d-flex">
                    <p className="icon">{<GrMail />}</p>
                    <p>lccalwaye@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-3 my-2">
          <p className="sec-title text-center" style={{ fontWeight: "900" }}>
            Let’s Connect
          </p>
          <div className="icons d-flex justify-content-center ">
            <p>{<AiFillFacebook />}</p>
            <p>{<AiFillLinkedin />}</p>
            <p>{<AiFillTwitterSquare />}</p>
            <p>{<GrMail />}</p>
          </div>
        </div>
      </div>
      <div className="row d-flex d-lg-none">
        <div className="col-sm-4 col-12">
          <div className="section1">
            <p className="sec-title text-center" style={{ fontWeight: "900" }}>
              LCC
            </p>
            <p className="sec-title text-center" style={{ fontWeight: "900" }}>
              An ISO 9001:2015 Certified Company
            </p>
          </div>
        </div>
        <div className="col-sm-4 col-12">
          <p className="text-center">Copyright 2022 lcccochin.com</p>
          <p className="text-center">
            Terms and condition Security Privacy Policy
          </p>{" "}
        </div>
        <div className="col-sm-4 col-12">
          <p className="text-center">Let’s Connect</p>
          <div className="icons d-flex justify-content-center ">
            <p>{<AiFillFacebook />}</p>
            <p>{<AiFillLinkedin />}</p>
            <p>{<AiFillTwitterSquare />}</p>
            <p>{<GrMail />}</p>
          </div>
        </div>
      </div>
      {/* <div className="row">
          <div className="col-7">
            <div className="section1">
              <p className="sec-title">LCC</p>
              <p className="sec-title">An ISO 9001:2015 Certified Company</p>
              <p>Copyright 2022 lcccochin.com</p>
            </div>
            <div className="section2">
              <p>Terms and condition</p>
              <p>Privacy Policy</p>
              <p>Security</p>
            </div>
            <div className="section3">
              <p className="sec-title">Addresses</p>
              <div className="sec3-item">
                <p className="icon">{<MdLocationOn />}</p>
                <p>
                  3rd floor, Dharmodayam Bldgs Marine Drive, Cochin-31, Kerala
                </p>
              </div>
              <div className="sec3-item">
                <p className="icon">{<BsFillTelephoneFill />}</p>
                <p>091 484 2355545, 2380489</p>
              </div>
              <div className="sec3-item">
                <p className="icon">{<AiOutlineMobile />}</p>
                <p>091 94470 42425</p>
              </div>
              <div className="sec3-item">
                <p className="icon">{<GrMail />}</p>
                <p>info@lcccochin.com</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="col-5">
            <div className="section4">
              <div className="sec3-item">
                <p className="icon">{<MdLocationOn />}</p>
                <p>Above Gold Fort Jewellery By pass Jn., Aluva-1, Kerala</p>
              </div>
              <div className="sec3-item">
                <p className="icon">{<BsFillTelephoneFill />}</p>
                <p>091 484 2629996, 2630102</p>
              </div>
              <div className="sec3-item">
                <p className="icon">{<AiOutlineMobile />}</p>
                <p>091 94460 29996</p>
              </div>
              <div className="sec3-item">
                <p className="icon">{<GrMail />}</p>
                <p>lccalwaye@gmail.com</p>
              </div>
            </div>
            <div className="section5">
              <p className="sec-title">Let’s Connect</p>
              <div className="icons">
                <p>{<AiFillFacebook />}</p>
                <p>{<AiFillLinkedin />}</p>
                <p>{<AiFillTwitterSquare />}</p>
                <p>{<GrMail />}</p>
              </div>
            </div>
          </div>
        </div> */}
      {/* </FooterInnerContainer> */}
    </FooterContainer>
  );
}
export default Footer;
const FooterContainer = styled.div`
  background-color: #ffffff;
  width: 85%;
  margin: auto;
  padding: 20px 0;
`;
// const FooterInnerContainer = styled.div`
//   width: 85%;
//   margin: 0 auto;
//   // display: flex;
//   // justify-content: space-between;
//   // font-family: "Poppins";
//   // font-size: 13px;

//   // .sec-title {
//   //   font-weight: bold;
//   //   font-size: 14px;
//   //   margin-bottom: 10px;
//   //   opacity: 0.9;
//   // }

//   // .sec3-item {
//   //   display: flex;
//   //   gap: 10px;
//   //   align-items: center;
//   //   max-width: 300px;
//   //   .icon {
//   //     font-size: 16px;
//   //   }
//   // }

//   // .icons {
//   //   display: flex;
//   //   p {
//   //     font-size: 20px;
//   //   }
//   // }
//   // @media (max-width: 1500px) {
//   //   width: 70%;
//   // }
// `;
