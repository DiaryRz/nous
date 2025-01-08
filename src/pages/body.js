import React from 'react';
import './css/body.css';
import Header from '../components/header/header';
import HorizontalScroll from '../components/cadre/scroll';
import Banner from '../components/banner/banner';

const Body = () => {
    return (
        <>
            <Header />
            <Banner />
            <HorizontalScroll/>
            <div>hello world!</div>
        </>
    );
};

export default Body;