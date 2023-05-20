import React from 'react';
import { Link } from 'react-router-dom';

const ShowCategory = ({category}) => {
    const {_id, name, photo, price, rating,} =category
    return (
        <div className='my-10'>
            <div className="card w-96 h-full bg-base-100 shadow-xl mx-auto">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="Shoes" className="rounded-xl"  style={{ height: '300px', width: '300px' }} />
                </figure>
                <div className="card-body text-left">
                    <h2 className="card-title">{name}</h2>
                    <p>Price:{price}</p>
                    <div className="card-actions items-center">                        
                        <p>{rating}</p>
                        <Link to={`/viewToyDetails/${_id}`}>
                        <button className="btn btn-primary">View Details ❯</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowCategory;