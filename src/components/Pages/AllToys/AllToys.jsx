import React, { useEffect, useState } from 'react';
import ShowAllToys from './ShowAllToys';

const AllToys = () => {

    const [allToys, setAllToys] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/userToys')
            .then(res => res.json())
            .then(data => {
                setAllToys(data)
            })
    }, [])

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Seller-Name</th>
                            <th>Toy-Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allToys.map(allToy => <ShowAllToys key={allToy._id} allToy={allToy}></ShowAllToys>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;



