import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Category from '../../Category/Category';
import useTitle from '../../../../Hooks/useTitle';
import About from '../About/About';
import Exclusive from '../Exclusive/Exclusive';
import Exclusive2 from '../Exclusive/Exclusive2';


const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Exclusive></Exclusive>
            <Gallery></Gallery>
            <Category></Category>
            <Exclusive2></Exclusive2>
            <About></About>
        </div>
    );
};

export default Home;