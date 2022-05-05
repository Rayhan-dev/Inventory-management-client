import React from 'react';
import Banner from '../Banner/Banner';
import BookSection from '../BookSection/BookSection';
import Chart from '../Chart/Chart';
import Footer from '../Footer/Footer';
import MostItemInStock from '../MostItemInStock/MostItemInStock';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BookSection></BookSection>
            <Chart></Chart>
            <MostItemInStock></MostItemInStock>
            <Footer></Footer>
        </div>
    );
};

export default Home;