import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navigation = () => {

    const [currentTab, setCurrentTab] = useState("first");

    const handleSelect = (eventKey) => {
        setCurrentTab("second");
    };


    return (


        <div className="navbar flex flex justify-between" style={{ backgroundColor: "#14182b" }}
            defaultActiveKey="first"
            activeKey={currentTab}
            onSelect={(key) => setCurrentTab(key)}>
            <ul className="container flex border-b">
                <li className="-mb-px mr-1">
                    <a className="inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"><Link to={`/`}>Home</Link></a>
                </li>
                <li className="mr-1">
                    <a className="inline-block py-2 px-4 text-white hover:text-blue-500 font-semibold"><Link to={`/about_me`}>About Me</Link></a>
                </li>
                <li className="mr-1">
                    <a className="inline-block py-2 px-4 text-white hover:text-blue-500 font-semibold"><Link to={`/portfolio`}>Portfolio</Link></a>
                </li>
                <li className="mr-1">
                    <a className="inline-block py-2 px-4 text-white hover:text-blue-500 font-semibold"><Link to={`/resume`}>Resume</Link></a>
                </li>
                <li className="mr-1">
                    <a className="inline-block py-2 px-4 text-white hover:text-blue-500 font-semibold"><Link to={`/contact`}>Contact</Link></a>
                </li>
            </ul>


        </div>
    )
};

export default Navigation