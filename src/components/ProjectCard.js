import React from 'react';

const ProjectCard = ({ pro }) => {
    return (

        <div className="card card-compact w-96 bg-base-100 shadow-xl m-5">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>

        // <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-5 shadow-2xl hover:scale-150 duration-300 ...">

        //     <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />

        //     <div className="p-5">

        //         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{pro.project}</h5>

        //         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

        //         <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        //             <svg aria-hidden="true" className="w-4 h-4 shadow-xl shadow-cyan-500/50" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        //         </button>

        //     </div>
        // </div>

    )
};

export default ProjectCard