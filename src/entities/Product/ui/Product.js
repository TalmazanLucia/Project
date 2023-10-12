import React from 'react';
import { Button } from '../../../shared/ui/Button';
import './Product.scss';

const Product = ({className, title, description, image, phone, gmail, id}) => {

    return (
        <div className={`product-wrapper ${className}`}>
            <img className='image' src={image} alt="" />
            <p className='title'>{title}</p>
            <p className='description'>{description}</p>
            <p className='description'>phone: {phone}</p>
            <p className='description'>gmail: {gmail}</p>

            <Button text={"Booking"} isLink pathName={`/productdetails/${id}`} />
        </div>
        
    )
};

export default Product;