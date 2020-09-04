import React from 'react'
import Navigation from './Navigation';

function Header() {
    return (
        <header className="bg-gray-100 border-b p-3 flex justify-between">
            <h1>
                <span className="font-bold float-left">
                    AppName Sample Text
                </span>

                <Navigation />
            </h1>
        </header>
    );
};

export default Header