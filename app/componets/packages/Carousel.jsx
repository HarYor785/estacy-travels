'use client'

import React, { useState, useEffect } from 'react';
import image1 from '@images/packagebg1.png'
import image2 from '@images/packagebg2.png'
import image3 from '@images/packagebg3.png'
import Image from 'next/image';

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image1, image2, image3]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 4000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
      <div className="relative w-full h-[350px] overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-full h-full top-0 left-0 absolute inset-0 transition-opacity 
            duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url(${image?.src})`, backgroundSize: 'cover', 
            backgroundPosition: 'center',height: '100%'}}
          >
            <div className="w-full h-full bg-black bg-opacity-40 p-3 flex items-center justify-center">
                {children}
            </div>
          </div>
        ))}
      </div>
  );
};

export default Carousel;
