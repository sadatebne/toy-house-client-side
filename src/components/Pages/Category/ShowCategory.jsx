import React from 'react';
import { Link } from 'react-router-dom';

const ShowCategory = ({category}) => {
    const {_id, name, photo, price, rating,} =category
    return (
        <div >
            <div className="card w-96 h-full bg-base-100 shadow-xl mx-auto">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="Shoes" className="rounded-xl"  style={{ height: '300px', width: '300px' }} />
                </figure>
                <div className="card-body text-left">
                    <h2 className="card-title">{name}</h2>
                    <div className="card-actions items-center">
                        <p>{price}</p>
                        <p>{rating}</p>
                        <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-primary">❯</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowCategory;