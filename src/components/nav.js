/***********
 ** Imports
 ************/

//react
import React, { Component } from "react";

/*************
 ** Navigation bar
 ***************/

class Nav extends Component {
  render() {
    return (
      <nav className="shadow">
        <h1>
          Jack Gerrard<br />
          <br />Web Developer
        </h1>

        <ul id="nav-links">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#Education">Education</a>
        </ul>

        <section id="contact">
          <h4>Get in touch</h4>
          <a href="tel:0868447801">
            <i className="fa fa-phone" aria-hidden="true" />
            <br /> 353 86 844 7801
          </a>
          <br />
          <br />
          <a
            href="mailto:jackdgerrard@gmail.com?Subject=Hello%20again"
            target="_top"
          >
            <i className="fa fa-envelope-o" aria-hidden="true" />
            <br />jackdgerrard@gmail.com
          </a>
        </section>
      </nav>
    );
  }
}

export default Nav;
