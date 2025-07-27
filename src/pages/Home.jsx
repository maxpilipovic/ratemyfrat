import React from 'react';
import Search from '../components/States/Search';
import PopularSchools from '../components/Ranking/PopularSchools';
import PopularFrats from '../components/Ranking/PopularFrats';
import HighestRatedFrats from '../components/Ranking/HighestRatedFrats';

const Home = () => {

    return(
        <>
            <Search/>
            <PopularSchools/>
            <PopularFrats/>
            <HighestRatedFrats/>
        </>
    )

};

export default Home;