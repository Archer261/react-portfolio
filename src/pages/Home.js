import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Intro from '../components/Intro';

const Home = () => {
    return (
        <div class="flex flex-col">

            <Hero />

            <div class="flex flex-col lg:flex-row w-40 justify-around ...">
                <div className="flex-2 card glass m-5 p-5 w-auto h-auto">
                    <Skills />
                </div>
                <div className=" flex-1 my-3 p-5 w-auto h-auto drop-shadow-2xl">
                    <Intro />
                </div>
            </div>
            <div class="flex-1 w-32 ...">
                03
            </div>
            <div class="flex-1 w-32 ...">
                04
            </div>
        </div>
    )
};

export default Home