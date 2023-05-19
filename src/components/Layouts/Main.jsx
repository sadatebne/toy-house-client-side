import React from 'react';
import Home from '../Pages/Home/Home/Home';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Home></Home>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;