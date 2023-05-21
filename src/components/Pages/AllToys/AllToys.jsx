import React, { useEffect, useState } from 'react';
import ShowAllToys from './ShowAllToys';

const AllToys = () => {

    const [allToys, setAllToys] = useState([])


    useEffect(() => {
        fetch('https://toy-house-server-blond.vercel.app/userToys')
            .then(res => res.json())
            .then(data => {
                setAllToys(data)
            })
    }, [])


    const handleSearch = (event) => {
        event.preventDefault()

        const form = event.target
        const search = form.search.value

        console.log(search)

        fetch(`https://toy-house-server-blond.vercel.app/userToys/${search}`)
            .then(res => res.json())
            .then(data => {
                setAllToys(data)
                console.log(data)
            })

    }
    

    return (
        <div className='my-10'>
            <div className="overflow-x-auto w-full">
                {/* search */}
                <div className="my-8">
                    <form onSubmit={handleSearch}>
                        <div className="input-group">
                            <input type="text" name="search" placeholder="Search using full name…" className="input input-bordered" />
                            <button className="btn btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </form>
                </div>


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



