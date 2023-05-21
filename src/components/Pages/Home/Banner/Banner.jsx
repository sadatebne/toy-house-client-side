import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Banner = () => {
    
    useEffect(() => {
        AOS.init();
      }, [])
    
    return (
        <div data-aos="fade-left">
            <div className="carousel w-full ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://images.unsplash.com/photo-1580164631075-b3f1304f4051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" className="w-full" />

                    <div className="absolute rounded-xl h-full flex items-center justify-end transform -translate-y-1/2 left-0 right-5 pl-7 top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">

                        <div data-aos="fade-left" className='text-white space-y-3 md:space-y-7 md:w-1/2'>
                            <h1 className='text-xl md:text-7xl font-bold'>Toy House: Where Adventure and Creativity Come to Life!</h1>

                            <p>Explore, Select, and Delight in Your Perfect Playmate. Happy Shopping..</p>

                            <div>
                                <button className="btn btn-outline btn-success text-white mr-4">Discover More</button>
                                <button className="btn btn-outline btn-accent">Latest Toys</button>
                            </div>
                        </div>

                    </div>

                    <div className="absolute flex transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle me-3">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" className="w-full" />

                    <div className="absolute rounded-xl h-full flex items-center transform -translate-y-1/2 left-0 right-5 pl-7 top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">

                        <div className='text-white space-y-3 md:space-y-7 md:w-1/2'>
                            <h1 className='text-xl md:text-7xl font-bold'>Unleash the Fun with Our Amazing Toy Selection!</h1>

                            <p>Always Exclusive Toy List</p>

                            <div>
                                <button className="btn btn-outline btn-success text-white mr-4">Discover More</button>
                                <button className="btn btn-outline btn-accent">Latest Toys</button>
                            </div>
                        </div>

                    </div>


                    <div className="absolute flex transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle me-3">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://images.unsplash.com/photo-1618336753974-aae8e04506aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" className="w-full" />

                    <div className="absolute rounded-xl h-full flex items-center justify-end transform -translate-y-1/2 left-0 right-5 pl-7 top-1/2 ">

                        <div className='text-white space-y-3 md:space-y-7 md:w-1/2'>
                            <h1 className='text-xl md:text-7xl font-bold'>Get Unbeatable Discounts on Toys for a Limited Time!"</h1>

                            <p>Please Login And Enjoy Your Shopping...</p>

                            <div>
                                <button className="btn btn-outline btn-success text-white mr-4">Discover More</button>
                                <button className="btn btn-outline btn-accent">Latest Toys</button>
                            </div>
                        </div>

                    </div>


                    <div className="absolute flex transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle me-3">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80" className="w-full" />

                    <div className="absolute rounded-xl h-full flex items-center justify-start transform -translate-y-1/2 left-0 right-5 pl-7 top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">

                        <div className='text-white space-y-3 md:space-y-7 md:w-1/2'>
                            <h1 className='text-xl md:text-7xl font-bold'>Where Dreams and Playtime Collide in a World of Wonder!"</h1>

                            <p>Please Login And Enjoy Your Shopping...</p>

                            <div>
                                <button className="btn btn-outline btn-success text-white mr-4">Discover More</button>
                                <button className="btn btn-outline btn-accent">Latest Toys</button>
                            </div>
                        </div>

                    </div>


                    <div className="absolute flex transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle me-3">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;