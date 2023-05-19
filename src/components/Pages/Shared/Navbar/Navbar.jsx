import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceLaughBeam, faHouse } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content p-5 gap-x-36">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>All Toys</a></li>
                            <li><a>My Toys</a></li>
                            <li><a>Add A Toys</a></li>
                            <li><a>Blogs</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-3xl font-bold">
                        <span className='text-6xl'>T</span>
                        <span>
                            <FontAwesomeIcon icon={faFaceLaughBeam} bounce size="xl" style={{ color: "#003beb", }} />
                        </span>
                        <span className='text-6xl'>Y</span>
                        <span className='ms-3'><FontAwesomeIcon icon={faHouse} bounce size="xl" style={{ color: "#ff0000", }} /></span>

                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>All Toys</a></li>
                        <li><a>My Toys</a></li>
                        <li><a>Add A Toys</a></li>
                        <li><a>Blogs</a></li>
                    </ul>
                </div>
                <div className="w-1/2 flex-col md:flex-row justify-end">
                    <div className="avatar">
                        <div className="w-16 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <a className="btn">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;