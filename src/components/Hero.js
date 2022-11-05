import React, { useState, useEffect } from 'react';
import banner from '../assets/jaBanner.png'
import smBanner from '../assets/sm_banner.png'

const Hero = () => {

    // Get current screen width
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const updateWindowDimensions = () => {
            const newWidth = window.innerWidth;
            setWidth(newWidth);
            console.log("updating width");
        };

        window.addEventListener("resize", updateWindowDimensions);

        return () => window.removeEventListener("resize", updateWindowDimensions)

    }, []);

    // function to update my home Hero if the screen width is smaller than 1000px
    function changeHero(width) {
        if (width < 1000) {
            return smBanner
        } else {
            return banner
        }
    }

    console.log(width)

    return (
        <div className="container flex flex-row rounded-lg justify-center max-w-min...">
            <img className="rounded-lg drop-shadow-2xl" src={changeHero(width)} />
        </div>
    )
};

export default Hero