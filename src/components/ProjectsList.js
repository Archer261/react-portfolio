import React from 'react';
import ProjectCard from './ProjectCard';


const proList = [
    { project: 'spaghetti', id: 1, rating: 3 },
    { project: 'pizza', id: 2, rating: 4 },
    { project: 'cake', id: 3, rating: 2 },
    { project: 'cake', id: 3, rating: 3 },
    { project: 'cake', id: 3, rating: 1 },
    { project: 'cake', id: 3, rating: 3 },
    { project: 'cake', id: 3, rating: 4 },
    { project: 'cake', id: 3, rating: 5 },
    { project: 'cake', id: 3, rating: 2 },
    { project: 'cake', id: 3, rating: 3 },
]

const ProjectsList = () => {
    return (
        <div className='flex flex-wrap justify-center'>
            {proList.map((ele) => (
                <ProjectCard pro={ele} />
            )
            )}
        </div>
    )
};

export default ProjectsList