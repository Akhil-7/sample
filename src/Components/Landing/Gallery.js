import React from "react";
import styled from "styled-components";
import img1 from "../../assets/images/gallery/gallery1.svg";
import img2 from "../../assets/images/gallery/gallery2.svg";
import img3 from "../../assets/images/gallery/gallery3.svg";
import img4 from "../../assets/images/gallery/gallery4.svg";
import img5 from "../../assets/images/gallery/gallery5.svg";
import img6 from "../../assets/images/gallery/gallery6.svg";
import img7 from "../../assets/images/gallery/gallery7.svg";
import img8 from "../../assets/images/gallery/gallery8.svg";
import gallerySlider1 from "../../assets/images/gallery/gallery-slider-1.svg";
import gallerySlider2 from "../../assets/images/gallery/gallery-slider-2.svg";

function Gallery() {
  return (
    <GalleryContainer>
      <div className="inner-container">
        <p className="title">Gallery</p>
        <ImageContainer>
          <Upper>
            <div className="slider">
              <img src={gallerySlider1} alt="" />
            </div>
            <div className="grid">
              <div className="grid-upper">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
              </div>
              <div className="grid-lower">
                <img src={img3} alt="" />
                <img src={img4} alt="" />
              </div>
            </div>
          </Upper>
          <Lower>
            <div className="grid">
              <div className="grid-upper">
                <img src={img5} alt="" />
                <img src={img6} alt="" />
              </div>
              <div className="grid-lower">
                <img src={img7} alt="" />
                <img src={img8} alt="" />
              </div>
            </div>
            <div className="slider">
              <img src={gallerySlider2} alt="" />
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
    letter-spacing: 3px;
    margin-bottom: 20px;
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
