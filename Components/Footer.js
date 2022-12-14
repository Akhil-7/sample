import React from "react";
import {
	AiFillFacebook,
	AiFillLinkedin,
	AiFillTwitterSquare,
	AiOutlineMobile,
} from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { MdLocationOn } from "react-icons/md";
import styled from "styled-components";

function Footer() {
	return (
		<FooterContainer>
			<FooterInnerContainer>
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
											3rd floor, Dharmodayam Bldgs Marine Drive, Cochin-31,
											Kerala
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
							Let???s Connect
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
							<p
								className="sec-title text-center"
								style={{ fontWeight: "900" }}
							>
								LCC
							</p>
							<p
								className="sec-title text-center"
								style={{ fontWeight: "900" }}
							>
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
						<p className="text-center">Let???s Connect</p>
						<div className="icons d-flex justify-content-center fs-10">
							<p>{<AiFillFacebook />}</p>
							<p>{<AiFillLinkedin />}</p>
							<p>{<AiFillTwitterSquare />}</p>
							<p>{<GrMail />}</p>
						</div>
					</div>
				</div>
			</FooterInnerContainer>
		</FooterContainer>
	);
}
export default Footer;
const FooterInnerContainer = styled.div`
	width: 85%;
	margin: auto;
	padding: 20px 0;
	.icons {
		font-size: 30px;
	}
	p {
		font-family: "tiempos", serif;
	}
	.sec-title {
		font-family: "IM Fell Double Pica", serif;
		font-weight: 600;
	}
`;
const FooterContainer = styled.div`
	width: 100%;
	background-color: #fff8f0;
`;
