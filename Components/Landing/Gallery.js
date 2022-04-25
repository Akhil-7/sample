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
function Gallery() {
  return (
    <GalleryContainer>
      <div className="inner-container">
        <p className="title">Gallery</p>
        <ImageContainer>
          <Upper>
            ;
            <div className="slider">
              <Image src={gallerySlider1} alt="" />
            </div>
            <div className="grid">
              <div className="grid-upper">
                <Image src={img1} alt="" />
                <Image src={img2} alt="" />
              </div>
              <div className="grid-lower">
                <Image src={img3} alt="" />
                <Image src={img4} alt="" />
              </div>
            </div>
          </Upper>
          <Lower>
            <div className="grid">
              <div className="grid-upper">
                <Image src={img5} alt="" />
                <Image src={img6} alt="" />
              </div>
              <div className="grid-lower">
                <Image src={img7} alt="" />
                <Image src={img8} alt="" />
              </div>
            </div>
            <div className="slider">
              <Image src={gallerySlider2} alt="" />
            </div>
          </Lower>
        </ImageContainer>
      </div>
    </GalleryContainer>
  );
}
export default Gallery;

const GalleryContainer = styled.div`
  background-color: var(--secondary);
  .title {
    font-size: 50px;
    font-weight: bold;
    opacity: 0.9;
    color: #fff;
    font-family: poppins;
    letter-spacing: 5px;
    margin-bottom: 20px;
    font-family: "IM Fell Double Pica", serif;
  }
  .inner-container {
    width: 80%;
    margin: 0 auto;
  }
  padding: 50px 0;
`;
const ImageContainer = styled.div`
  img {
    max-width: 100%;
    border-radius: 10px;
  }
  .slider {
    width: 45%;
    img {
      width: 98%;
    }
  }
  .grid {
    display: flex;
    width: 45%;
    img {
      width: 95%;
      margin: 4px;
    }
  }
`;
const Upper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 15px;
`;

const Lower = styled.div`
  display: flex;
  width: 100%;
`;
