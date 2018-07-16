/***********
 ** Imports
 ************/

//React
import React, { Component } from 'react';
//Particles.js
import Particles from 'react-particles-js';
import ParticlesParams from './particles/particles.json';
//Styles
import './styles/App.css';
import 'font-awesome/css/font-awesome.min.css';
//Components
import Nav from './components/nav';
//import Projects from "./components/projects.js";
//import Cv from "./components/cv.js";
import Skills from './components/skills.js';
import Blurb from './components/blurb.js';
import Social from './components/social.js';
import Footer from './components/footer.js';
//import Education from "./components/education.js";

import CookieConsent from 'react-cookie-consent';

/********
 ** App
 ********/

class App extends Component {
    render() {
        return (
            <div id="app">
                <Particles id="Particles" params={ParticlesParams} />
                <div id="grid-container">
                    <Nav />
                    <Blurb />
                    <Skills />
                    <Social />

                    <Footer />
                </div>
                <CookieConsent>
                    This website uses cookies to enhance the user experience.
                </CookieConsent>
            </div>
        );
    }
}

export default App;
