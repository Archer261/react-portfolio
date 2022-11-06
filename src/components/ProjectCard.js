import React from 'react';
import moment from 'moment/moment';

const ProjectCard = ({ pro }) => {
    return (

        <div style={{ color: "#14182b" }} className="card card-compact w-96 shadow-xl m-5">
            <figure><img src="https://img.icons8.com/3d-fluency/750/null/github.png" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{pro.name}</h2>
                <p>{pro.description}</p>
                <h3>Created: {moment(`${pro.created_at}`).format('MM DD YYYY')}</h3>
                <div className="card-actions justify-end">
                    <a href={`${pro.html_url}`}><button style={{ backgroundColor: "#ffde59", color: "#14182b" }} className="btn">View Repo</button></a>
                </div>
            </div>
        </div>
    )
};

export default ProjectCard