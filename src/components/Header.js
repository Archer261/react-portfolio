import React from 'react';
import Navigation from './Navigation'

const style = {
    backgroundColor: "#1f2647"
};

const Header = () => {
    return (
        <div style={style} className="drop-shadow-2xl z-50">
            <Navigation />
        </div>
    )
};

export default Header 