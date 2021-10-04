import React from 'react';
import Header from './Header/Header';
import Home from './Intro/Intro';
import './HomePage.scss';

const HomePage: React.FC = () => {
    return(
        <React.Fragment>
            <Header />
            <main className="main-wrapper">
                <Home/>
            </main>
        </React.Fragment>
    )
}

export default HomePage;