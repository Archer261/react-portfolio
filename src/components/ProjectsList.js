import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import recTracker from '../assets/recTracker.PNG'
import tdDaily from '../assets/tdDaily.png'
import pacMan from '../assets/pac-man.jpg'
import weather from '../assets/weather.png'


// Async function that grabs all of my git repositories and renders
// within the ProjectCard component
export default function ProjectsList() {

    const [projects, getProjects] = useState([]);

    useEffect(() => {
        getAllProjects();
    }, []);

    const getAllProjects = async () => {
        const response = await axios.get(`https://api.github.com/users/Archer261/repos`)

        const allProjects = response.data
        getProjects(allProjects)
    }

    const showCase = [
        { name: 'Recipe Tracker', desc: 'A React recipe tracker that allows users to store recipes to a GraphQL database.', image: recTracker, link: 'https://damp-wave-57141.herokuapp.com/', repo: 'https://github.com/Archer261/recipe-tracker' },
        { name: 'Touchdown Daily News', desc: 'Handlebar js ran news site that uses Cheerio js to fetch the latest news for your favorite NFL team and puts it all in one place!', image: tdDaily, link: 'https://morning-savannah-61110.herokuapp.com/', repo: 'https://github.com/Archer261/nfl-news' },
        { name: 'JS Pac-man', desc: 'A barebones, CSS based Pac-man game!', image: pacMan, link: 'https://archer261.github.io/pac-man-app/', repo: 'https://github.com/Archer261/pac-man-app' },
        { name: 'Weather Tracker', desc: 'A weather tracking app that provides a 5-day weather forecast for the the city of your choosing.', image: weather, link: 'https://archer261.github.io/weather-forcaster/', repo: 'https://github.com/Archer261/weather-forcaster' }
    ]


    return (
        <div>
            <div className='container'>
                <h2 className='text-lg' style={{ color: '#14182b' }}>Showcase</h2>
                <div className='container flex flex-row'>
                    {showCase.map((prj) => {
                        return (
                            <>
                                <div style={{ color: "#14182b" }} className="card card-compact w-96 bg-base-100 shadow-xl m-5">
                                    <h2 className="card-title text-white p-5">{prj.name}</h2>
                                    <figure><img src={prj.image} alt={prj.name} /></figure>
                                    <div className="card-body text-white">
                                        <p>{prj.desc}</p>
                                        {/* <h3>Created: {moment(`${pro.created_at}`).format('MM DD YYYY')}</h3> */}
                                        <div className="card-actions justify-end">
                                            <a href={prj.link}><button style={{ backgroundColor: "#ffde59", color: "#14182b" }} className="btn">Open</button></a>
                                            <a href={prj.repo}><button style={{ backgroundColor: "#ffde59", color: "#14182b" }} className="btn">Repository</button></a>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>

            <div className="divide-x-4 divide-slate-400/25 ..."></div>

            <div className='container flex flex-wrap justify-center'>
                {projects.map((ele) => {
                    return <ProjectCard pro={ele} key={ele.id} />
                }
                )}
            </div>
        </div>
    )
};
