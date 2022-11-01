import React from 'react';
import banner from '../assets/jaBanner.png'

const Hero = () => {
    return (
        <div className="container flex flex-row rounded-lg justify-center max-w-min...">
            <img className="rounded-lg drop-shadow-2xl" src={banner} />
        </div>
    )
};

export default Hero