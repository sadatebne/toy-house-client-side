import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    const [view, setView] = useState(false)

    const handleViewPass = () => {
        setView(!view)
    }

    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="mr-7 w-full md:w-1/2">
                        <img src="https://img.freepik.com/free-vector/cartoon-character-clown-dances-with-musical-melody-symbols_1308-60403.jpg?t=st=1684478570~exp=1684479170~hmac=9314f74092b3c6b4c25a713eba66b8064c152f614ba50368bc3bd30da214aa81" style={{ height: "900px" }} />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className='text-4xl text-center my-5 font-bold'>Sign Up</h1>
                            <form>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" name="name" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                                </div>
                                
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Password</span>
                                    </label>
                                    <input type={view ? "text" : "password"} placeholder="password" name="password" className="input input-bordered" required />

                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Confirm Password</span>
                                    </label>
                                    <input type={view ? "text" :"password"} placeholder="password" name="confirm" className="input input-bordered" required />

                                </div>

                                <div className="form-control">
                                        <label className="flex flex-row-reverse justify-end cursor-pointer mt-4">
                                            <span className="label-text ms-5 font-bold">Show Password</span>
                                            <input onClick={handleViewPass} type="checkbox" className="checkbox checkbox-primary" />
                                        </label>
                                    </div>

                                    <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Photo URL</span>
                                    </label>
                                    <input type="text" placeholder="photo URL" name="photo" className="input input-bordered" />
                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>

                            </form>
                            <p>Already Have an account?<span className='text-[#FF3811]'><Link to='/login'> Sign In</Link></span> </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;