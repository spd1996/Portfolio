'use client'

import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel CSS
import PageContainer from '../components/pagecontainer';

const ImageUpload: React.FC = () => {
    const [images, setImages] = useState<string[]>([]);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const filesArray = Array.from(e.target.files).map(file =>
                URL.createObjectURL(file)
            );
            setImages((prevImages) => prevImages.concat(filesArray));
        }
    };

    const renderCarousel = (source: string[]) => {
        return (
            <Carousel
                showArrows={true}
                infiniteLoop
                useKeyboardArrows
                dynamicHeight
            >
                {source.map((photo, index) => (
                    <div key={index} className="p-2  shadow-lg mx-4 my-2 transform hover:scale-105 transition duration-300  bg-gradient-to-r from-accent-blue to-accent-indigo">
                        <img 
                            src={photo} 
                            alt={`upload-${index}`} 
                            className="max-h-96 max-w-auto object-contain border-4 border-accent-green bg-gradient-to-r from-accent-yellow via-accent-green to-accent-blue rounded-lg" // Tailwind classes for image
                            onClick={() => {/* handle image click to enlarge */}}
                        />
                    </div>
                ))}
            </Carousel>
        );
    };
    
    return (
        <PageContainer>
        <div className=" bg-gray-300 flex flex-col items-center">
            <input type="file" multiple onChange={handleImageChange} className="mb-4 p-2 border rounded shadow mt-4" />
            <div className="mt-4">
                {images.length > 0 ? renderCarousel(images) : <div className="text-white rounded-md mb-3"><img src="/empty.svg" alt="My App Logo" width={500} height={400} /></div>}
            </div>
        </div>
        </PageContainer>
    );
};

export default ImageUpload;
