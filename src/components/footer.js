/***********
 ** Imports
 ************/

//react
import React, { Component } from "react";

/*************
 ** page footer
 ***************/

class Footer extends Component {
  render() {
    return (
      <footer className="shadow">
        <section id="footnav">
          <ul>
            <li>
              <a href="#Home">Top</a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
            <li>
              <a href="#CV">CV</a>
            </li>
          </ul>

        <p>
          Icons by
          <a href="http://fontawesome.io/">
            <i className="fa fa-font-awesome" aria-hidden="true" />Font Awesome
          </a>
        </p>

          
        </section>
      </footer>
    );
  }
}

export default Footer;
