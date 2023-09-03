import React from 'react';
import { Navbar } from '../../../widgets/Navbar';
import { Header } from '../../../features/Header';
import { ServicesOverview } from '../../../widgets/ServicesOverview';
import './Home.scss';

const Home = () => {

    return (
        <div className='home-wrapper'>
            <div className='navbar-header-wrapper'>
                <Navbar />
                <Header />
                <ServicesOverview />
            </div>
        </div>
    )
};

export default Home;