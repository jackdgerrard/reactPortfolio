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
        <a href="#Home">
          <h1>
            Jack Gerrard<br />
            <br />Web Developer
          </h1>
        </a>

        <ul id="nav-links">
          <a href="#Projects">Projects</a>
          <a href="#CV">Curriculum Vitae</a>
          <a href="#Education">Education</a>
        </ul>

        <section id="contact">
          <h4>Get in touch</h4>
          <a href="tel:0868447801">
            <i className="fa fa-mobile" aria-hidden="true" /> 353 86 844 7801
          </a>
          <br />
          <a
            href="mailto:jackdgerrard@gmail.com?Subject=Hello%20again"
            target="_top"
          >
            <i className="fa fa-envelope-o" aria-hidden="true" />{" "}
            jackdgerrard@gmail.com
          </a>
        </section>
      </nav>
    );
  }
}

export default Nav;
