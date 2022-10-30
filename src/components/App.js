import React from 'react';
import Header from './Header'
import Footer from './Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutMe from '../pages/AboutMe';
import Portfolio from '../pages/Portfolio';
import Home from '../pages/Home';
import Contact from '../pages/Contact';

const App = () => {
    return (
        <div className='bg-indigo-200 py-10'>
            <BrowserRouter>
                <Header />
                <div className='flex py-10 my-10 w-min justify-center'>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about_me" element={<AboutMe />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                    </Routes>
                </div>
            </BrowserRouter>
            <Footer />
        </div>
    );
}
export default App;
