import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2'
import AOS from 'aos';
import 'aos/dist/aos.css';


const ShowCategory = ({ category }) => {
    const { _id, name, photo, price, rating, } = category
    const { user } = useContext(AuthContext)

    const handleView = () => {
        if (!user) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "You have to log in first to view details"
            })
        }
    }

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className='my-10'>
            <div className="card w-96 h-full bg-base-100 shadow-xl mx-auto" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="Shoes" className="rounded-xl" style={{ height: '300px', width: '300px' }} />
                </figure>
                <div className="card-body text-left">
                    <h2 className="card-title">{name}</h2>
                    <p>Price:{price}</p>
                    <div className="card-actions items-center">
                        <p>{rating}</p>
                        <Link to={`/viewToyDetails/${_id}`}>
                            <button onClick={handleView} className="btn btn-primary">View Details ❯</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowCategory;