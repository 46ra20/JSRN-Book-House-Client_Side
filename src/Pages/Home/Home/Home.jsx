import React from 'react';
import Advertised from '../Advertised/Advertised';
import Carousel from '../Carousel/Carousel';
import Categories from '../Categories/Categories';
import WebsiteSummary from '../WebsiteSummary/WebsiteSummary';

const Home = () => {
    return (
        <div className='my-5'>
            <Carousel></Carousel>
            <Categories></Categories>
            <Advertised></Advertised>
            <WebsiteSummary></WebsiteSummary>
        </div>
    );
};

export default Home;