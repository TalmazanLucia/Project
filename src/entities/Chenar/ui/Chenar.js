import React from 'react';
import './Chenar.scss';

const Chenar = ({className, title, description, image}) => {

    return (
        <div className={`chenar-wrapper ${className}`}>
            <p className='title'>{title}</p>
            <div className='image-wrapper'>
                <img src={image} alt="" />
            </div>
            <p className='description'>{description}</p>
        </div>
    )
};

export default Chenar;