import React from "react";
import GalleryComp from "./GalleryComp";
import Link from "next/link";
export default function HomeGallery() {
  return (
    <>
      <div className="gallery__wrapper">
        <div className="gallery__container2">
          <div
            className="gallery-title"
            style={{ fontFamily: "'IM Fell Double Pica', serif" }}
          >
            Gallery
          </div>

          <GalleryComp />
          <div className="gallery__btn-wrapper">
            <Link href="/gallery">View All</Link>
          </div>
        </div>
      </div>
    </>
  );
}
