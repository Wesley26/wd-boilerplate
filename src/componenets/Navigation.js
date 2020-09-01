import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


function Navigation() {
    
    /*
    Conditional rendering
    showMenu - Menu variable in hook.
    setShowMenu - sets the useState from false to true and vice versa.
    navMenu - JSX variable for the Navigation menu.
    navMenuMask - Nav Menu mask variable, listens onClick to always close menu.
    */
    const [showMenu, setShowMenu] = useState(false);
    let navMenu;
    let navMenuMask;

    if(showMenu === true) {
        navMenu = <div className="border-solid border-gray-500 bg-gray-300 fixed top-0 left-0 w-3/5 h-full z-50 shadow">
                    This is the Menu!
                    <br/>
                    Click outside of the menu to close.
                  </div>;
        navMenuMask = <div className="bg-black bg-opacity-50 fixed top-0 left-0 w-full h-full z-50"
                           onClick={() => setShowMenu(false)}>
                  </div>
    };

    return (
        <nav className="p-3 absolute right-0 float-right">
            <span className="text-l">
                <FontAwesomeIcon 
                    icon={faBars}

                    onClick={() => setShowMenu(!showMenu)}
                />
            </span>

            { navMenuMask }

            { navMenu }
        </nav>
    );
};

export default Navigation