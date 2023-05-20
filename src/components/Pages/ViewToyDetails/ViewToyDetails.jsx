import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ViewToyDetails = () => {
    const toys = useLoaderData()
    const {name, category,quantity, sellerName, photo, details, price, rating}=toys
    return (
        <div className='my-10'>
            <Link to="/">Back To Main</Link>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col space-x-8 lg:flex-row ">
                    <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='space-y-6'>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <h3 className='text-2xl'>
                            <span className='font-bold'>Category:</span> {category}
                        </h3>
                        <h3 className='text-2xl'>
                            <span className='font-bold'>Seller-Name:</span> {sellerName}
                        </h3>
                        <p className="text-xl">{details}</p>
                        <h3 className='text-2xl'>
                            <span className='font-bold'>Price:</span> {price}
                        </h3>
                        <h3 className='text-2xl'>
                            <span className='font-bold'>Available Quantity:</span> {quantity}
                        </h3>
                        <h3 className='text-2xl'>
                            <span className='font-bold'>Rating:</span> {rating}
                        </h3>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewToyDetails;