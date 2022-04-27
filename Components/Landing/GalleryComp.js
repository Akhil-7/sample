import React from "react";
import styled from "styled-components";
import img1 from "../../public/assets/images/gallery/gallery1.svg";
import img2 from "../../public/assets/images/gallery/gallery2.svg";
import img3 from "../../public/assets/images/gallery/gallery3.svg";
import img4 from "../../public/assets/images/gallery/gallery4.svg";
import img5 from "../../public/assets/images/gallery/gallery5.svg";
import img6 from "../../public/assets/images/gallery/gallery6.svg";
import img7 from "../../public/assets/images/gallery/gallery7.svg";
import img8 from "../../public/assets/images/gallery/gallery8.svg";
import gallerySlider1 from "../../public/assets/images/gallery/gallery-slider-1.svg";
import gallerySlider2 from "../../public/assets/images/gallery/gallery-slider-2.svg";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";

function GalleryComp() {
  return (
    <>
      <Row className="g-3 mt-1">
        <Col xs={12} md={6}>
          <div className="gallery__slider-img">
            <Image src={gallerySlider1} layout="responsive" alt="" />
          </div>
        </Col>
        <Col xs={12} md={6}>
          <Row className="g-3">
            <Col xs={6}>
              <Image src={img1} layout="responsive" alt="" />
            </Col>
            <Col xs={6}>
              <Image src={img2} layout="responsive" alt="" />
            </Col>
            <Col xs={6}>
              <Image src={img3} layout="responsive" alt="" />
            </Col>
            <Col xs={6}>
              <Image src={img4} layout="responsive" alt="" />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="g-3 mt-1">
        <Col xs={12} md={6}>
          <Row className="g-3">
            <Col xs={6}>
              <Image src={img5} layout="responsive" alt="" />
            </Col>
            <Col xs={6}>
              <Image src={img6} layout="responsive" alt="" />
            </Col>
            <Col xs={6}>
              <Image src={img7} layout="responsive" alt="" />
            </Col>
            <Col xs={6}>
              <Image src={img8} layout="responsive" alt="" />
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={6}>
          <div className="gallery__slider-img">
            <Image src={gallerySlider2} layout="responsive" />
          </div>
        </Col>
      </Row>
    </>
  );
}
export default GalleryComp;
{
  // <GalleryContainer>
  //   <div className="inner-container">
  //     <p className="title">Gallery</p>
  //     <ImageContainer>
  //       {/* <Upper> */}
  //       <div className="row">
  //         <div className="col-12 col-md-6 p-0">
  //           <div className="m-2 d-flex justify-content-center">
  //             <Image src={gallerySlider1} alt="" />
  //           </div>
  //         </div>
  //         <div className="col-12 col-md-6 p-0">
  //           <div className="">
  //             <div className=" row">
  //               <div className="col-6 d-flex justify-content-end p-1">
  //                 <Image src={img1} alt="" />
  //               </div>
  //               <div className="col-6 d-flex justify-content-start p-1">
  //                 <Image src={img2} alt="" />
  //               </div>
  //               <div className="col-6 d-flex justify-content-end p-1">
  //                 <Image src={img3} alt="" />
  //               </div>
  //               <div className="col-6 d-flex justify-content-start p-1">
  //                 <Image src={img4} alt="" />
  //               </div>
  //             </div>
  //           </div>
  //           {/* <div className="grid-upper m-1">
  //             <Image src={img2} alt="" />
  //           </div> */}
  //           {/* <div className="grid-lower m-1">
  //             <Image src={img3} alt="" />
  //             <Image src={img4} alt="" />
  //           </div> */}
  //         </div>
  //       </div>
  //       {/* </Upper> */}
  //       {/* <Lower> */}
  //       <div className="row">
  //         <div className="col-12 col-md-6 p-0 order-2 order-md-1">
  //           <div className="">
  //             <div className="row">
  //               <div className="col-6 d-flex justify-content-end p-1">
  //                 <Image src={img5} alt="" />
  //               </div>
  //               <div className="col-6 d-flex justify-content-start p-1">
  //                 <Image src={img6} alt="" />
  //               </div>
  //               <div className="col-6 d-flex justify-content-end p-1">
  //                 <Image src={img7} alt="" />
  //               </div>
  //               <div className="col-6  d-flex justify-content-start p-1">
  //                 <Image src={img8} alt="" />
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="col-12 col-md-6 p-0 order-1 order-md-2">
  //           <div className="d-flex justify-content-center">
  //             <Image src={gallerySlider2} alt="" />
  //           </div>
  //         </div>
  //       </div>
  //       {/* </Lower> */}
  //     </ImageContainer>
  //   </div>
  // </GalleryContainer>
  // const GalleryContainer = styled.div`
  //   background-color: var(--secondary);
  //   .title {
  //     font-size: 50px;
  //     font-weight: bold;
  //     opacity: 0.9;
  //     color: #Fff8f0;
  //     font-family: poppins;
  //     letter-spacing: 5px;
  //     margin-bottom: 20px;
  //     font-family: "IM Fell Double Pica", serif;
  //   }
  //   .inner-container {
  //     width: 80%;
  //     margin: 0 auto;
  //   }
  //   padding: 50px 0;
  // `;
  // const ImageContainer = styled.div`
  //   img {
  //     max-width: 100%;
  //     border-radius: 10px;
  //   }
  //   .slider {
  //     width: 45%;
  //     img {
  //       width: 98%;
  //     }
  //   }
  //   .grid {
  //     display: flex;
  //     width: 45%;
  //     img {
  //       width: 95%;
  //       margin: 4px;
  //     }
  //   }
  // `;
  // const Upper = styled.div`
  //   display: flex;
  //   width: 100%;
  //   margin-bottom: 15px;
  // `;
  // const Lower = styled.div`
  //   display: flex;
  //   width: 100%;
  // `;
}

{
  /* <div className="row">
  <div className="col-6 p-0 bg-warning">
	<Image src={gallerySlider1} alt="" />
  </div>
  <div className="col-6 p-0 bg-danger">
	<div className="d-flex">
	  <div className="w-50 d-flex justify-content-center">
		<Image
		  src={img1}
		  alt=""
		  className=""
		  style={{ width: "100%" }}
		/>
	  </div>
	  <div className="w-50 d-flex justify-content-center">
		<Image
		  src={img2}
		  alt=""
		  className=""
		  style={{ width: "100%" }}
		/>
	  </div>
	</div>
	<div className="d-flex">
	  <div className="w-50 d-flex justify-content-center">
		<Image
		  src={img1}
		  alt=""
		  className=""
		  style={{ width: "100%" }}
		/>
	  </div>
	  <div className="w-50 d-flex justify-content-center">
		<Image
		  src={img2}
		  alt=""
		  className=""
		  style={{ width: "100%" }}
		/>
	  </div>
	</div>
	<div className="col-6 p-0">
		<Image
		  src={img1}
		  alt=""
		  className=""
		  style={{ width: "100%" }}
		/>
	  </div>
	  <div className="col-6 p-0">
		<Image
		  src={img2}
		  alt=""
		  className=""
		  style={{ width: "100%" }}
		/>
	  </div> 
	 <div className="col-6 p-0">
		<Image
		  src={img3}
		  alt=""
		  className=""
		  style={{ width: "100%" }}
		/>
	  </div>
	  <div className="col-6 p-0">
		<Image
		  src={img4}
		  alt=""
		  className=""
		  style={{ width: "100%" }}
		/>
	  </div>
  </div>
  </div>
  <div className="row">
  <div className="col-6 p-0 bg-warning">
	<Image src={gallerySlider1} alt="" />
  </div>
  <div className="col-6 p-0 bg-danger">
	<div className="d-flex">
	  <div className="w-50 d-flex justify-content-center">
		<Image
		  src={img1}
		  alt=""
		  className=""
		  style={{ width: "100%" }}
		/>
	  </div>
	  <div className="w-50 d-flex justify-content-center">
		<Image
		  src={img2}
		  alt=""
		  className=""
		  style={{ width: "100%" }}
		/>
	  </div>
	</div>
	<div className="d-flex">
	  <div className="w-50 d-flex justify-content-center">
		<Image
		  src={img1}
		  alt=""
		  className=""
		  style={{ width: "100%" }}
		/>
	  </div>
	  <div className="w-50 d-flex justify-content-center">
		<Image
		  src={img2}
		  alt=""
		  className=""
		  style={{ width: "100%" }}
		/>
	  </div>
	</div>
	<div className="col-6 p-0">
		<Image
		  src={img1}
		  alt=""
		  className=""
		  style={{ width: "100%" }}
		/>
	  </div>
	  <div className="col-6 p-0">
		<Image
		  src={img2}
		  alt=""
		  className=""
		  style={{ width: "100%" }}
		/>
	  </div> */
}
//  <div className="col-6 p-0">
//       <Image
//         src={img3}
//         alt=""
//         className=""
//         style={{ width: "100%" }}
//       />
//     </div>
//     <div className="col-6 p-0">
//       <Image
//         src={img4}
//         alt=""
//         className=""
//         style={{ width: "100%" }}
//       />
//     </div>
// </div>
// </div>
