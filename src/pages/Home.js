import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Intro from '../components/Intro';

const Home = () => {
    return (
        <div class="flex flex-col">

            <Hero />

            <div class="flex flex-row w-40 justify-between ...">
                <div className="card glass my-3 p-5 w-auto h-auto">
                    <Skills />
                </div>
                <div className="my-3 p-5 w-auto h-auto drop-shadow-2xl">
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