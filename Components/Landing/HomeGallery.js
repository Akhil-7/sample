import React from 'react'
import GalleryComp from './GalleryComp'

export default function HomeGallery() {
    return (
        <>
            <div className="gallery__wrapper">
                <div className="gallery__container2">
                    <div className="gallery-title">Gallery</div>

                    <GalleryComp />
                    <div className="gallery__btn-wrapper">
                        <a href="/gallery">
                            View All
                        </a>
                    </div>
                </div>

            </div>
        </>


    )
}
