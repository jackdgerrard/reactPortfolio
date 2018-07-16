/***********
 ** Imports
 ************/

//react
import React, { Component } from 'react';

/*************
 ** Navigation bar
 ***************/

class Nav extends Component {
    render() {
        return (
            <nav className="shadow" id="nav">
                <h1>
                    Jack Gerrard<br />
                    <br />Web Developer
                </h1>
                {/*   <ul id="nav-links">
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#education">Education</a>
                    </li>
                    <li>
                        <a href="#social">Social Networks</a>
                    </li>
                </ul>

        */}
                <section id="contact">
                    <h4>Get in touch</h4>
                    <a href="tel:0868447801">
                        <i className="fa fa-phone" aria-hidden="true" />
                        <br /> 353 86 844 7801
                    </a>
                    <br />
                    <br />
                    <a href="mailto:mail@jackgerrard.io" target="_top">
                        <i className="fa fa-envelope-o" aria-hidden="true" />
                        <br />mail@jackgerrard.io
                    </a>
                </section>
            </nav>
        );
    }
}

export default Nav;
