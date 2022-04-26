import React from 'react';
import GalleryComp from '../Components/Landing/GalleryComp';

export default function gallery() {
    return (
        <>
            <div className='gallery__container mb-5'>

                <div className='gallery__heading'>
                    Explore LCC
                </div>
            <div className='gallery__container mb-5'>

                <GalleryComp />
                <GalleryComp />
            </div>
            </div>

        </>
    )
}
