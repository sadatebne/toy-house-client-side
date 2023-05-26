import React, { useEffect, useState } from 'react';
import ShowAllToys from './ShowAllToys';
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

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

    const sort = () => {
        const sortedToys = [...allToys]; // Create a copy of the array to avoid mutating the original data
        sortedToys.sort((a, b) => a.price - b.price); // Sort the toys by price in ascending order
        setAllToys(sortedToys); // Update the state with the sorted toys
        setAceSort(true)
    }

    const sort2 = () => {
        const sortedToys = [...allToys]; // Create a copy of the array to avoid mutating the original data
        sortedToys.sort((a, b) => b.price - a.price); // Sort the toys by price in ascending order
        setAllToys(sortedToys); // Update the state with the sorted toys
        setAceSort(false)
    }

    const [aceSort, setAceSort] = useState(true)


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

                <div className='flex items-center gap-5'>
                    {/* button */} 
                    <h3 className='text-2xl font-semibold'>Sort By Price: </h3>
                    {
                        aceSort ? <button onClick={sort2} className="btn btn-circle my-5">
                            <FaArrowUp />
                        </button> :

                            <button onClick={sort} className="btn btn-circle my-5">
                                <FaArrowDown />
                            </button>

                    }
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



