import { render } from '@testing-library/react';
import React from 'react';

const Footer = () => {
    return (

        <footer style={{ backgroundColor: "#14182b" }} className="footer fixed bottom-0 z-50 footer-center p-4 bg-base-300 text-base-content">
            <div className='flex justify-between'>
                <div className='flex mx-5'>
                    <p>Copyright © 2022 - All right reserved by Joseph Archer</p>
                </div>
                <div className='flex mx-5'>
                    <a href='https://www.linkedin.com/in/kjarcher'><img src="https://img.icons8.com/glyph-neue/64/FFFFFF/linkedin.png" /></a>
                    <a href='https://github.com/Archer261'><img src="https://img.icons8.com/glyph-neue/64/FFFFFF/github.png" /></a>

                </div>
            </div>

        </footer>
    )
};

export default Footer