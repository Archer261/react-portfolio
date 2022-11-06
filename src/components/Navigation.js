import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import kov from '../assets/kov.png'


const Navigation = () => {

    const onLoadTab = useLocation().pathname

    // Create object that stores all tabs that I will be using
    const [currentTab, setTab] = useState({
        activeTab: 1,
        tabs: [{ id: 1, name: 'Home', link: '/' }, { id: 2, name: 'About Me', link: '/about_me' }, { id: 3, name: 'Portfolio', link: '/portfolio' }, { id: 4, name: 'Resume', link: '/resume' }, { id: 5, name: 'Contact Me', link: '/contact' }]
    })

    // function that sets the currentTab values
    function toggleActive(index) {
        setTab({ ...currentTab, activeTab: currentTab.tabs[index] })
    }


    // function that changes the styling of the active tab
    function toggleActiveStyles(index) {
        if (currentTab.tabs[index] === currentTab.activeTab) {
            return "inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
        } else {
            return "inline-block py-2 px-4 text-white hover:text-blue-500 font-semibold"
        }
    }

    return (
        <div className="navbar flex flex justify-between" style={{ backgroundColor: "#14182b" }}>
            {/* <div className='container flex w-36 h-auto mx-10 justify-center overflow-visible text-white text-2'>Joseph Archer</div> */}
            <Link to={'/'}><div className='container w-12' onClick={() => { toggleActive(0) }}><img src={kov} className='rounded-full w-auto h-auto overflow-hidden' /></div></Link>
            <ul className="container flex border-b">
                {currentTab.tabs.map((tab, index) => (
                    <li className="-mb-px mr-1">
                        <Link to={tab.link}> <a key={index} className={toggleActiveStyles(index)} onClick={() => { toggleActive(index) }}>{tab.name}</a></Link>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default Navigation

// inline-block py-2 px-4 text-white hover:text-blue-500 font-semibold

// inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold