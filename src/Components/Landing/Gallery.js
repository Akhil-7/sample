import React from "react";
import styled from "styled-components";

function Gallery() {
  return (
    <GalleryContainer>
      <div className="inner-container">
        <p className="title">Gallery</p>
        <div className="container"></div>
      </div>
    </GalleryContainer>
  );
}
export default Gallery;

const GalleryContainer = styled.div`
  background-color: var(--dark-grey);
  margin-top: 10px;
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
`;
