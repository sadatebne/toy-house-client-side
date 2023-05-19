import React from 'react';

const AddToys = () => {
    
    const handleAddToy=(event)=>{
        event.preventDefault()
        const form=event.target

        const name=form.name.value
        const sellerName=form.sellerName.value
        const email=form.email.value 
        const category=form.category.value  
        const price=form.price.value
        const rating=form.rating.value 
        const quantity=form.quantity.value 
        const details=form.details.value 
        const photo=form.photo.value
        
        const data={name,sellerName,email,category,price,rating,quantity,details,photo}

        console.log(data)
     
    }

    

    return (
        <div>
            <h1 className='text-center text-5xl font-bold my-8'> Add a Toy</h1>
            <form onSubmit={handleAddToy}>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" name="sellerName" placeholder="password" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub Category</span>
                        </label>
                        <input type="text" name='category' placeholder="marvel/dc/star-war" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' placeholder="price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name='rating' placeholder="rating out of 5" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="text" name='quantity' placeholder="quantity" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Details Description</span>
                        </label>
                        <input type="text" name='details' placeholder="quantity" className="input input-bordered" />
                    </div>
                </div>
                
                <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photo' placeholder="photoURL" className="input input-bordered" />
                    </div>

                <div className="form-control my-6">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddToys;