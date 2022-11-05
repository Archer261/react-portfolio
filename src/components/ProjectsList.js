import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';


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

    return (
        <div className='container flex flex-wrap justify-center'>
            {projects.map((ele) => {
                return <ProjectCard pro={ele} key={ele.id} />
            }
            )}
        </div>
    )
};
