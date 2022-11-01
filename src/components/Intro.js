import React from "react"
import bg from '../assets/bg.png'
import { Link } from "react-router-dom";

const Intro = () => {
    return (


        <div className=" flex card lg:card-side shadow-xl h-3/6 w-auto p-20 mr-20..." style={{ backgroundImage: `url("${bg}")` }}>
            <div className="card-body text-white">
                <h2 className="card-title text-2xl">Nice to meet you!</h2>
                <p className="pb-10 indent-36 ">As a Full-Stack Developer, I have the capcity to work on front-end and back-end applications. I specialize in JavaScript programming and database management and quite enjoy discovering new ways to design applications with React.
                    My focus is to build out the perfect application for you no matter how big or small. And there's no challenge to tough for me to handle.
                    I look forward to working with you!</p>
                <div className="card-actions justify-start pt-10">
                    <button style={{ backgroundColor: "#ffde59", color: "#1f2647" }} className="btn text-2xl drop-shadow-2xl"><Link to={`/contact`}>Get in Touch!</Link></button>
                </div>
            </div>
        </div>

    )
};

export default Intro 