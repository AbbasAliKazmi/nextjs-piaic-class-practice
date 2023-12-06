"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Gallery_carousel() {
    const images = [
        '/img1.png',
        '/img2.png',
        '/img3.png',
        '/img4.png',
        '/img5.png',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {((currentIndex === 3 || currentIndex === 4) ? images.slice(currentIndex - 1, currentIndex + 2) : images.slice(currentIndex, currentIndex + 3)).map((image, index) => (
                    <div key={index} style={{ marginRight: '10px' }}>
                        <Image src={image} layout="responsive" height={100} width={30} objectFit="cover" alt='img' />
                    </div>
                ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                {images.map((_, index) => (
                    <button
                        key={index}
                        style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            margin: '0 5px',
                            backgroundColor: index === currentIndex ? 'blue' : 'gray',
                        }}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
}
