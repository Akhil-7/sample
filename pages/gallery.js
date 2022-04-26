import React from 'react';
import GalleryComp from '../Components/Landing/GalleryComp';

export default function gallery() {
    return (
        <>
            <div className='gallery__container mb-5'>

                <div className='gallery__heading'>
                    Explore LCC
                </div>

                <GalleryComp />
                <GalleryComp />
            </div>

        </>
    )
}
