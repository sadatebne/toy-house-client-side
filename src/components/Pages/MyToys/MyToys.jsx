import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import MyToysTable from './MyToysTable';
import Swal from 'sweetalert2';

const MyToys = () => {
    const { user } = useContext(AuthContext)

    const [myToys, setMyToys] = useState([])

    useEffect(() => {
        fetch(`https://toy-house-server-blond.vercel.app/myToys/${user?.displayName}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
            })
    }, [user])

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://toy-house-server-blond.vercel.app/myToys/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {

                            const remaining=myToys.filter(t=>t._id !== id)
                            setMyToys(remaining)
                              Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                              )
                        }
                    })


            }
        })

    }

    return (
        <div className='my-12'>
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
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map(myToy => <MyToysTable key={myToy._id} myToy={myToy} handleDelete={handleDelete}></MyToysTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;