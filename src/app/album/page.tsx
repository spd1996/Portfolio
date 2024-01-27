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
                    <div key={index} className="p-2  shadow-lg mx-4 my-2 transform hover:scale-105 transition duration-300">
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
                    <div className="bg-gradient-to-r from-accent-blue to-accent-indigo">
            <input type="file" multiple onChange={handleImageChange} />
            <div className="mt-4">
                {images.length > 0 && renderCarousel(images)}
            </div>
        </div>
        </PageContainer>
    );
};

export default ImageUpload;
