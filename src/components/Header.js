import React from 'react';
import Navigation from './Navigation'

const style = {
    backgroundColor: "#14182b"
};

const Header = () => {
    return (
        <div style={style} className=" fixed drop-shadow-2xl z-50 w-full">
            <Navigation />
        </div>
    )
};

export default Header 