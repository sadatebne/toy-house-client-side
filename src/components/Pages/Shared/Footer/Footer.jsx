import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceLaughBeam, faHouse } from '@fortawesome/free-solid-svg-icons'
//raect Icon
import { FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <a className="btn btn-ghost normal-case ms-5 text-3xl font-bold">
                        <span className='text-6xl'>T</span>
                        <span>
                            <FontAwesomeIcon icon={faFaceLaughBeam} bounce size="xl" style={{ color: "#003beb", }} />
                        </span>
                        <span className='text-6xl'>Y</span>
                        <span className='ms-3'><FontAwesomeIcon icon={faHouse} bounce size="xl" style={{ color: "#ff0000", }} /></span>

                    </a>
                    <p className='text-xl text-center font-semibold mt-3'>TOY HOUSE Ltd.<br />Trusted Shop For Buy Toys</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <div className="grid grid-flow-col gap-4">
                        <a><FaFacebook color='blue' fontSize="3em" /></a>
                        <a><FaYoutube color='red' fontSize="3em" /></a>
                        <a><FaTwitter color='skyblue' fontSize="3em" /></a>
                    </div>
                </div>
            </footer>
            <div className='bg-base-200 text-base-content text-center p-5'>
                <p>Copyright © 2023 - All right reserved by Toy House Ltd</p>
            </div>
        </div>
    );
};

export default Footer;