import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

import Swal from 'sweetalert2'

import { getAuth, updateProfile } from "firebase/auth";
import app from '../../../firebase/firebase.config';
const auth = getAuth(app);


const Register = () => {

    const [view, setView] = useState(false)

    const [err, setErr] = useState('')

    const handleViewPass = () => {
        setView(!view)
    }

    const { signUp, logout } = useContext(AuthContext)

    const handleRegister = (event) => {
        event.preventDefault()

        const form = event.target
        const name= form.name.value
        const email = form.email.value
        const password = form.password.value
        const confirm = form.confirm.value
        const photo=form.photo.value

        if (password == confirm) {

            signUp(email, password)
                .then(result => {
                    console.log(result.user)
                    updateUser(result.user, name, photo)
                    Swal.fire({
                        icon: 'success',
                        title: 'Successfully Register',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    form.reset()
                })
                .catch(error => {
                    console.log(error)
                    setErr(error.message)
                })

                
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Password and Confirm Password Doesn't Match"
            })
        }

        const updateUser=(user, name, photo)=>{
            updateProfile(user,{
                displayName : name,
                photoURL: photo,
            })
            .then(() => {
                console.log('user name updated')
                logout()
            })
            .catch(error => {
                setError(error.message);
            })
        }

    }

    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="mr-7 w-full md:w-1/2">
                        <img src="https://img.freepik.com/free-photo/fun-clown-3d-illustration_183364-81001.jpg?size=626&ext=jpg&uid=R103521277&ga=GA1.2.419039387.1683279282" style={{ height: "900px" }} />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className='text-4xl text-center my-5 font-bold'>Sign Up</h1>
                            <form onSubmit={handleRegister}>
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
                                    <input type={view ? "text" : "password"} placeholder="password" name="confirm" className="input input-bordered" required />

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

                                <p className='text-red-600 my-3'>{err}</p>

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