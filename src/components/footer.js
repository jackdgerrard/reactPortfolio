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
        </section>
        <section>
          <h4>Made with:</h4>
          <p>
            <a href="https://www.npmjs.com/package/react-particles-js">
              ParticleJS
            </a>,
          </p>
          <p>
            <a href="https://reactjs.org/">React</a>,
          </p>
          <p>
            <a href="http://fontawesome.io/">Font Awesome</a>
          </p>
          <p>
            and <i class="fa fa-heart" aria-hidden="true" id="heart" />
          </p>
        </section>
      </footer>
    );
  }
}

export default Footer;
