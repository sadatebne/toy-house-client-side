import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceLaughBeam, faHouse } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../../providers/AuthProvider';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)

    const handleLogout = () => {
        logout()
            .then(result => { })
            .catch(error => { })
    }

    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content p-5 gap-x-36">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52">
                            {
                                user?.email ? <>
                                    <li><Link to="/">Home</Link></li>
                                    <li><a>All Toys</a></li>
                                    <li><Link to="/myToys">My Toys</Link></li>
                                    <li><Link to="/addToys">Add A Toys</Link></li>
                                    <li><Link to="/blogs">Blogs</Link></li>
                                </> : <>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/addToys">Add A Toys</Link></li>
                                    <li><Link to="/blogs">Blogs</Link></li>
                                </>
                            }
                        </ul>
                    </div>
                    <div className='flex items-center gap-4'>
                        <Link>
                            <img style={{ height: "50px", width: "50px" }} src="https://i.ibb.co/B2FBX7w/logo-2.png" alt="" />
                        </Link>
                        <h1><span className='text-3xl'>T</span>
                        <span>
                            <FontAwesomeIcon icon={faFaceLaughBeam} bounce size="xl" style={{ color: "#003beb", }} />
                        </span>
                        <span className='text-3xl'>Y House</span></h1>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        user?.email ? <>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/allToys">All Toys</Link></li>
                            <li><Link to="/myToys">My Toys</Link></li>
                            <li><Link to="/addToys">Add A Toys</Link></li>
                            <li><Link to="/blogs">Blogs</Link></li>
                        </> : <>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/addToys">Add A Toys</Link></li>
                            <li><Link to="/blogs">Blogs</Link></li>
                        </>
                    }

                </ul>
            </div>
            <div className="w-1/2 flex-col md:flex-row justify-end">
                <div className="avatar tooltip tooltip-bottom tooltip-primary" data-tip={user?.displayName}>
                    <div className="w-16 rounded-full">
                        {
                            user?.email ? <img src={user?.photoURL} /> : ""
                        }
                    </div>
                </div>
                {
                    user ? <Link onClick={handleLogout} className="btn">Logout</Link> : <Link to="/login" className="btn">Login</Link>
                }
            </div>
        </div>
        </div >
    );
};

export default Navbar;

{/* <a className="btn btn-ghost normal-case text-3xl font-bold">
<span className='text-6xl'>T</span>
<span>
    <FontAwesomeIcon icon={faFaceLaughBeam} bounce size="xl" style={{ color: "#003beb", }} />
</span>
<span className='text-6xl'>Y</span>
<span className='ms-3'><FontAwesomeIcon icon={faHouse} bounce size="xl" style={{ color: "#ff0000", }} /></span>

</a> */}