import React, { useState } from 'react';
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
    const [imagesSources, setImagesSources] = useState([
        {image: barberImage, path: "/barbershop"},
        {image: gymImage, path: "/gym"},
        {image: medicineImage, path: "/medicine"},
        {image: restaurantsImage, path: "/restaurants"},
        {image: spaImage, path: "/spa"}
      ]);
    const [activeImage, setActiveImage] = useState(0);

    const handlePrevious = () => {
        if (activeImage === 0) {
            setImagesSources(prev => [...imagesSources, ...prev])
        }
        setActiveImage(activeImage  + 4 - 1);
    }

    const handleNext = () => {
        if (activeImage + 4 === imagesSources.length) {
            setImagesSources(prev => [...prev, ...imagesSources])
        }
        setActiveImage(activeImage + 1);
    }

    return (
        <div className="services-overview-wrapper">
            <div onClick={handlePrevious} className="nav-arrow">
                <ArrowLeftBottom style={{width: 24, height:24}}/>
            </div>
            {
                imagesSources.slice(activeImage, activeImage + 4).map(({image, path}) => (
                    <div className="service-item" onClick={() => navigate(path)}>
                        <img src={image} alt="" />
                    </div>
                ))
            }
            <div onClick={handleNext} className="nav-arrow">
                <ArrowRightBottom style={{width: 24, height:24}}/>
            </div>
        </div>
    )
}

export default ServicesOverview;