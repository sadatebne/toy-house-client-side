import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../../providers/AuthProvider';

import Swal from 'sweetalert2'
import useTitle from '../../../Hooks/useTitle';

const Login = () => {

    useTitle('Login')

    const [err, setErr] = useState('')

    const [view, setView] = useState(false)

    const location=useLocation()

    const navigate=useNavigate()

    const from= location.state?.from?.pathname || "/";

    const handleViewPass = () => {
        setView(!view)
    }

    const {login, googleLogin}=useContext(AuthContext)

    const handleLogin = (event) => {
        event.preventDefault()

        const form = event.target
        const email = form.email.value
        const password = form.password.value

        login(email, password)
        .then(result=>{
            console.log(result.user)

            Swal.fire({
                icon: 'success',
                title: 'Successfully Login',
                showConfirmButton: false,
                timer: 1500
              })
              form.reset()
              navigate(from)
        })
        .catch(error=>{
            console.log(error)
            setErr(error.message)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Provide Valid Email And Password"
              })
        })
    }

    const handleGoogleLogin=()=>{
        googleLogin()
        .then(result=>{
            console.log(result.user)

            Swal.fire({
                icon: 'success',
                title: 'Successfully Login',
                showConfirmButton: false,
                timer: 1500
              })
              navigate(from)
        })
        .catch(error=>{
            console.log(error)
            setErr(error.message)
        })
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
                            <h1 className='text-4xl text-center my-5 font-bold'>LOGIN</h1>
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Password</span>
                                    </label>
                                    <input type={view ? "text" : "password"} placeholder="password" name="password" className="input input-bordered" />

                                    <div className="form-control">
                                        <label className="flex flex-row-reverse justify-end cursor-pointer mt-4">
                                            <span className="label-text ms-5">Show Password</span>
                                            <input onClick={handleViewPass} type="checkbox" className="checkbox checkbox-primary" />
                                        </label>
                                    </div>

                                    <p className='text-red-600 my-3'>{err}</p>

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            <div className='my-5 text-center'>
                                    <p className='text-2xl font-semibold mb-3'>Sign in With </p>
                                    <span>
                                        <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline">
                                            <FaGoogle color='blue' fontSize="2em" />
                                        </button>
                                    </span>
                                    <span className='ms-5'>
                                        <button className="btn btn-circle btn-outline">
                                            <FaGithub color='green' fontSize="2em" />
                                        </button>
                                    </span>
                                </div>
                            <p>Have an account?<span className='text-[#FF3811]'><Link to='/register'> Sign Up</Link></span> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;