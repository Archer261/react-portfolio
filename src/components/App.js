import React from 'react';
import Header from './Header'
import Footer from './Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutMe from '../pages/AboutMe';
import Portfolio from '../pages/Portfolio';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import wallpaper from '../assets/wallpaper_.jpg'
import Resume from './Resume';

const App = () => {
    console.log(wallpaper)
    return (
        <div className="py-10">
            <BrowserRouter>
                <Header />
                <div className="flex py-24 w-min justify-center bg-gradient-to-r from-transparent items-center z-0 ..." style={{ backgroundImage: `url("${wallpaper}")` }} >
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about_me" element={<AboutMe />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/resume" element={<Resume />} />
                    </Routes>
                </div>
            </BrowserRouter>
            <Footer />
        </div>
    );
}
export default App;
