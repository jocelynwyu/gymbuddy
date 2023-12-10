import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MainPage.css';

import Features from '../pages/Features';
import About from '../pages/About';
import Contact from '../pages/Contact';
import How from '../pages/How'
import Statistics from '../pages/Statistics';
import What from '../pages/What';


function MainPage() {
    return(
        <>
            <Features/>
            <Statistics/>
            <How/>
            <What/>
            <About/>
            <Contact/>
        </>
    )
}

export default MainPage;