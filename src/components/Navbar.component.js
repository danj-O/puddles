import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'

class Navbar extends React.Component {
    render (){
        return (
            <nav>
                <ul className='navbar'>
                    <li className="navbar-item item2">
                        <Link to='/About'>
                            About 
                        </Link>
                    </li>
                    <li className="navbar-item item3">
                        <Link to='/Listen'> 
                            Listen
                        </Link>
                    </li>
                    <li className="navbar-item item1">
                        <Link to='/'> 
                            <img className='headerLogo' src= { require ("./images/puddleslogo.svg") } alt=""/> 
                        </Link>
                    </li>
                    <li className="navbar-item item4">
                        <Link to='/Watch'>
                            Watch 
                        </Link>
                    </li>
                    <li className="navbar-item item5">
                        <Link to='/contact'>
                            Contact 
                        </Link>
                    </li>
                </ul>
    
                
            </nav>
        )
    }
}
export default Navbar