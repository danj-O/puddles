import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Navbar from './components/Navbar.component'
import About from './components/About.component'
import Listen from './components/Listen.component'
import Watch from './components/Watch.component'
import Contact from './components/Contact.component'
import Home from './components/Home.component'
import Footer from './components/Footer.component'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <br/>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/listen' component={Listen} />
        <Route path='/watch' component={Watch} />
        <Route path='/contact' component={Contact} />
        <br/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
