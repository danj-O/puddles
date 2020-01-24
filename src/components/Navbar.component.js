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
                            <img className="cloud" src={ require('./images/about.png')} alt=""/>
                        </Link>
                        <div className="drops-container">
                            <div className="drop-container">
                                <img className="drop" src={ require("./images/drop.png")} alt=""/>
                            </div>
                            <div className="drop-container d2">
                                <img className="drop" src={ require("./images/drop.png")} alt=""/>
                            </div>
                            <div className="drop-container d3">
                                <img className="drop" src={ require("./images/drop.png")} alt=""/>
                            </div>
                            <div className="drop-container d4">
                                <img className="drop" src={ require("./images/drop.png")} alt=""/>
                            </div>    
                        </div>
                    </li>
                    <li className="navbar-item item3">
                        <Link to='/Listen'> 
                            <img className="cloud" src={ require('./images/listen.png')} alt=""/>            
                        </Link>
                        <div className="drops-container">
                            <div className="drop-container">
                                <img className="drop" src={ require("./images/drop.png")} alt=""/>
                            </div>
                            <div className="drop-container d2">
                                <img className="drop" src={ require("./images/drop.png")} alt=""/>
                            </div>
                            <div className="drop-container d3">
                                <img className="drop" src={ require("./images/drop.png")} alt=""/>
                            </div>
                            <div className="drop-container d4">
                                <img className="drop" src={ require("./images/drop.png")} alt=""/>
                            </div>    
                        </div>

                    </li>
                    <li className="navbar-logo item1">
                        <Link to='/'> 
                            <img className='headerLogo' src= { require ("./images/puddleslogo.svg") } alt=""/> 
                        </Link>
                    </li>
                    <li className="navbar-item item4">
                        <Link to='/Watch'>
                            <img className="cloud" src={ require('./images/watch.png')} alt=""/>
                        </Link>
                        <div className="drops-container">
                            <div className="drop-container">
                                <img className="drop" src={ require("./images/drop.png")} alt=""/>
                            </div>
                            <div className="drop-container d2">
                                <img className="drop" src={ require("./images/drop.png")} alt=""/>
                            </div>
                            <div className="drop-container d3">
                                <img className="drop" src={ require("./images/drop.png")} alt=""/>
                            </div>
                            <div className="drop-container d4">
                                <img className="drop" src={ require("./images/drop.png")} alt=""/>
                            </div>    
                        </div>

                    </li>
                    <li className="navbar-item item5">
                        <Link to='/contact'>
                            <img className="cloud" src={ require('./images/contact.png')} alt=""/>                         
                        </Link>
                        <div className="drops-container">
                            <div className="drop-container">
                                <img className="drop" src={ require("./images/drop.png")} alt=""/>
                            </div>
                            <div className="drop-container d2">
                                <img className="drop" src={ require("./images/drop.png")} alt=""/>
                            </div>
                            <div className="drop-container d3">
                                <img className="drop" src={ require("./images/drop.png")} alt=""/>
                            </div>
                            <div className="drop-container d4">
                                <img className="drop" src={ require("./images/drop.png")} alt=""/>
                            </div>    
                        </div>
                    </li>
                </ul>
    
                
            </nav>
        )
    }
}
export default Navbar