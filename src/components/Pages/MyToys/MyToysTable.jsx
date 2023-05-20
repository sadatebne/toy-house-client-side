import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrashAlt, FaFileAlt } from 'react-icons/fa';

const MyToysTable = ({ myToy, handleDelete }) => {
    const { _id, name, sellerName, category, price, quantity } = myToy
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
                <Link to={`/toyUpdate/${_id}`}>
                    <button className="btn gap-2">
                        Update <FaFileAlt color='yellow' />
                    </button>
                </Link>
            </th>
            <th>
                <button onClick={()=>{handleDelete(_id)}} className="btn btn-circle btn-outline">
                    <FaTrashAlt />
                </button>
            </th>

        </tr>

    );
};

export default MyToysTable;