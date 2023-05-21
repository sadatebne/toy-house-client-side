import React from 'react';
import Marquee from "react-fast-marquee";

const Exclusive = () => {
    return (
        <div className='my-16'>
            <h2 className='my-10 text-5xl font-bold text-center'>Exclusive Toys</h2>
            <Marquee style={{ height: "200px", width: "100%" }}>

                <img className='mx-3' src="https://images.unsplash.com/photo-1560343776-97e7d202ff0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80" alt="" style={{ height: "200px", width: "200px" }} />

                <img src="https://images.unsplash.com/photo-1561149877-84d268ba65b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80" alt="" style={{ height: "200px", width: "200px" }} />

                <img className='mx-3' src="https://images.unsplash.com/photo-1608889175157-718b6205a50d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80" alt="" style={{ height: "200px", width: "200px" }} />

                <img src="https://images.unsplash.com/photo-1608889476561-6242cfdbf622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80" alt="" style={{ height: "200px", width: "200px" }} />

                <img className='mx-3' src="https://images.unsplash.com/photo-1658233427331-088df3be7ad5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" style={{ height: "200px", width: "200px" }} />

                <img src="https://images.unsplash.com/photo-1658233427329-9d72b824e144?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80https://holycowvegan.net/wp-content/uploads/2021/01/best-chana-masala-recipe-homemade-delicious.jpg" alt="" style={{ height: "200px", width: "200px" }} />

                <img src="https://images.unsplash.com/photo-1558679908-541bcf1249ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" style={{ height: "200px", width: "200px" }} />


            </Marquee>

        </div>
    );
};

export default Exclusive;