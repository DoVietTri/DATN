import React, { useEffect } from 'react';
import Carousel from './Carousel';
import NewBook from './NewBook';
import './Home.css';
import BookHot from './BookHot';
import BestSeller from './BestSeller';

const Home = () => {
    useEffect(() => {

        window.scrollTo(0,0);
    }, []);
    return (
       <>
        <Carousel />
        <BestSeller />
        <NewBook />
        <BookHot />
       </>
    )
}

export default Home;
