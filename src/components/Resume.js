import React from 'react';
import PortfolioCard from './ProfileCard';
import resume from '../assets/Joseph_Archer.pdf'



const Resume = () => {
    return (
        <div className='container flex w-screen h-screen'>
            <iframe src={`${resume}#view=fitH`} className="w-full h-full" />
        </div>
    )
};

export default Resume