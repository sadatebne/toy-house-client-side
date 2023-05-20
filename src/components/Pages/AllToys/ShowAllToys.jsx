import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ShowAllToys = ({ allToy }) => {
    const {_id, name, sellerName, email, category, price, rating, quantity, details, photo } = allToy

    return (
        
        <tr>
            <td>
                <div className="font-bold">{sellerName}</div>
            </td>
            <td>
                <div className="font-bold">{name}</div>
            </td>
            <td>{category}</td>
            <td>$ {price}</td>
            <td>{quantity}</td>
            <th>
               <Link to={`/toyDetails/${_id}`}>
               <button className="btn gap-2">
                    View Details <FaArrowRight color='yellow'/>
                </button>
               </Link> 
            </th>
        </tr>

    );
}; 

export default ShowAllToys;