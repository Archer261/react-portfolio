import { render } from '@testing-library/react';
import React from 'react';

const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 z-20 p-4 w-full bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <div className="mr-4 hover:underline md:mr-6 ">About</div>
                </li>
                <li>
                    <div className="mr-4 hover:underline md:mr-6">Privacy Policy</div>
                </li>
                <li>
                    <div className="mr-4 hover:underline md:mr-6">Licensing</div>
                </li>
                <li>
                    <div className="hover:underline">Contact</div>
                </li>
            </ul>
        </footer>
    )
};

export default Footer