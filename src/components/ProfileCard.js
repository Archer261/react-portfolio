import React from 'react';
import pic from '../assets/Joe-40-v2.jpg'


const PortfolioCard = () => {
    return (

        <div class="container flex bg-white shadow-lg shadow-gray-200 rounded-2xl sm:p-6 xl:p-8 rounded-lg w-full h-auto mx-5 px-5">
            <div className='container flex flex-col'>
                <div className='container overflow-visible text-7xl'>
                    <h2 className='pt-10 '>Full-stack Developer</h2>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className='container flex text-black p-5'>
                    This is a test
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