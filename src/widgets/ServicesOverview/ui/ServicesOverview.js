import React, { useState, useEffect, useCallback } from 'react';
import './ServicesOverview.scss';
import { ArrowLeftBottom, ArrowRightBottom } from '../../../shared/assets';
import barberImage from '../../../shared/assets/images/b2.jpg';
import gymImage from '../../../shared/assets/images/g2.jpg';
import medicineImage from '../../../shared/assets/images/m1.jpg';
import restaurantsImage from '../../../shared/assets/images/r3.jpg';
import spaImage from '../../../shared/assets/images/s3.jpg';
import { useNavigate } from 'react-router-dom';

const ServicesOverview = () => {
    const navigate = useNavigate();

    const imagesSources = [
        { image: barberImage, path: "/barbershop" },
        { image: gymImage, path: "/gym" },
        { image: medicineImage, path: "/medicine" },
        { image: restaurantsImage, path: "/restaurants" },
        { image: spaImage, path: "/spa" },
        { image: barberImage, path: "/barbershop" },
        { image: gymImage, path: "/gym" },
        { image: medicineImage, path: "/medicine" },
        { image: restaurantsImage, path: "/restaurants" },
        { image: spaImage, path: "/spa" },
    ];

    const [numImagesToDisplay, setNumImagesToDisplay] = useState(4);
    const [activeImage, setActiveImage] = useState(0);

    const handleResize = useCallback(() => {
        const newNumImagesToDisplay = window.innerWidth <= 768 ? 1 : 4;
        setNumImagesToDisplay(newNumImagesToDisplay);
    }, []);

    useEffect(() => {
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);

    const handlePrevious = () => {
        setActiveImage((prevActiveImage) => (prevActiveImage - 1 + (window.innerWidth <= 768 ? imagesSources.length : 4)) % (window.innerWidth <= 768 ? imagesSources.length : 4));
    };

    const handleNext = () => {
        setActiveImage((prevActiveImage) => (prevActiveImage + 1) % (window.innerWidth <= 768 ? imagesSources.length : 4));
    };

    return (
        <div className="services-overview-wrapper">
            <div onClick={handlePrevious} className="nav-arrow">
                <ArrowLeftBottom style={{ width: 24, height: 24 }} />
            </div>
            {
                imagesSources.slice(activeImage, activeImage + numImagesToDisplay).map(({ image, path }, index) => (
                    <div key={index} className="service-item" onClick={() => navigate(path)}>
                        <img src={image} alt="" />
                    </div>
                ))
            }
            <div onClick={handleNext} className="nav-arrow">
                <ArrowRightBottom style={{ width: 24, height: 24 }} />
            </div>
        </div>
    );
};

export default ServicesOverview;
