import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ pro }) => {
    return (

        <div className="card card-compact w-96 bg-base-100 shadow-xl m-5">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{pro.name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <a href={`${pro.html_url}`}><button className="btn btn-primary">View Repo</button></a>
                </div>
            </div>
        </div>
    )
};

export default ProjectCard