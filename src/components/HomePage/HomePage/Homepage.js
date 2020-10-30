import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomeComments from '../HomeComments/HomeComments';
import Services from '../Services/Services';
import Works from '../Works/Works';
import './HomePage.css';

const Homepage = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Works></Works>
            <HomeComments></HomeComments>
            <Footer></Footer>
        </div>
    );
};

export default Homepage;