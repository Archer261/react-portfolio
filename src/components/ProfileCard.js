import React from 'react';
import pic from '../assets/Joe-40-v2.jpg'


const PortfolioCard = () => {
    return (

        <div class="container flex bg-white shadow-lg shadow-gray-200 rounded-2xl sm:p-6 xl:p-8 rounded-lg w-full h-auto mx-5 px-5">
            <div className='container flex flex-col'>
                <div className='container overflow-visible text-7xl'>
                    <h2 className='pt-10 ' style={{ color: '#14182b' }}>Full-stack Developer</h2>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className='container flex p-5 text-lg' style={{ color: '#14182b' }}>
                    My dream of becoming a developer goes back as far as I can remember. I find purpose in understanding complex systems and why they function the way that they do.
                    I am a talented Full-Stack developer with a background in JavaScript. I have spent the past 10 years in the field learning and growing my understanding about the world
                    of web design. I am currently working as a Salesforce Developer and have began my foreay into freelancing. My years of working with everyone from small businesses to enterprise
                    teams have allowed me the skills and expertise to create useful content that fullfill the goals of all different types of customers.
                    <br />
                    <br />
                    I'm very thoughtful with a very sharp demeanor. Honesty is my north star and will always maintain a level of integrity that offers full transparency. I enjoy chanllenging work and will always say yes before no.
                    I value the goals of my clients, your vision is my vision.
                </div>
            </div>

            <div className="divider lg:divider-vertical"></div>

            <div className='container flex flex-col'>
                <img src={pic} className="drop-shadow-2xl" />
            </div>
        </div>

    )
};

export default PortfolioCard