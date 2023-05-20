import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';

const UpdateToys = () => {
    const { user } = useContext(AuthContext)
    const toys = useLoaderData()
    const { _id } = toys
    //console.log(loader)

    const handleUpdate = (event) => {
        event.preventDefault()

        const form = event.target
        const price = form.price.value
        const quantity = form.quantity.value
        const details = form.details.value

        const update = { price, quantity, details }

        fetch(`http://localhost:3000/updateToys/${_id}`, {

            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount>0) {

                    Swal.fire({
                        icon: 'success',
                        title: 'Successfully Update',
                        showConfirmButton: false,
                        timer: 1500,
                    })
                }
            })
    }


    return (
        <div>
            <h1 className='text-5xl text-center font-bold my-6'>Update Toy Data</h1>
            <form onSubmit={handleUpdate}>
                <div className="grid md:grid-cols-2 gap-6">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" name="sellerName" placeholder="password" defaultValue={user?.displayName} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" defaultValue={user?.email} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' placeholder="price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="text" name='quantity' placeholder="quantity" className="input input-bordered" />
                    </div>
                </div>

                <div className="form-control mt-5">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <input type="text" name='details' placeholder="product details" className="input input-bordered" />
                </div>

                <div className="form-control my-6">
                    <button className="btn btn-primary">Update</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateToys;