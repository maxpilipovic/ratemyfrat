import React from 'react';
import Search from '../components/States/Search';
import PopularSchools from '../components/Ranking/PopularSchools';
import PopularFrats from '../components/Ranking/PopularFrats';
import HighestRatedFrats from '../components/Ranking/HighestRatedFrats';
import ReviewSection from '../components/States/Review'
import Footer from '../components/States/Footer'

const Home = () => {

    return(
        <>
            <Search/>
            <PopularSchools/>
            <PopularFrats/>
            <HighestRatedFrats/>
            <ReviewSection/>
        </>
    )

};

export default Home;