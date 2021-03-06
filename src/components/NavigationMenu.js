import React from 'react'
import { Link } from 'react-router-dom'

function NavigationMenu(props) {

    /*
    To edit which Navigation Menu pages you have, add a new list item containing
    the Link you want to name it. Next, go to App.js, and add a new Route with
    the JSX page content that you want to feature inside.
    */

    return(
        <div className="absolute pl-20 text-center px-3">
            <div>
                <h3 className="font-semibold">
                    AppName Sample Text
                <br/>
                    Click outside of this main menu to close.
                </h3>
            </div>
                <br/>
                <br/>
            <ul>
                <li>
                <Link 
                    to="/" 
                    className="text-blue-500 py-3 block border-black border-b border-t"
                    onClick={props.closeMenu}>Home</Link>
                </li>
                <li>
                <Link 
                    to="/about" 
                    className="text-blue-500 py-3 block border-black border-b"
                    onClick={props.closeMenu}>About</Link>
                </li>
            </ul>
        </div>
    );
};

export default NavigationMenu