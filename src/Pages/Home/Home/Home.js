import React from 'react';
import Banner from '../Banner/Banner';
import BookSection from '../BookSection/BookSection';
import Chart from '../Chart/Chart';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BookSection></BookSection>
            <Chart></Chart>
            <Footer></Footer>
        </div>
    );
};

export default Home;