/***********
 ** Imports
 ************/

//react
import React, { Component } from 'react';

/*************
 ** page footer
 ***************/

class Footer extends Component {
    render() {
        return (
            <footer className="shadow">
                {/*   <section id="footnav">
                  
          <ul>
            <li>
              <a href="#nav">Top</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
          </ul>

         
                </section>
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
                 */}
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
                        and{' '}
                        <i class="fa fa-heart" aria-hidden="true" id="heart" />
                    </p>
                </section>
            </footer>
        );
    }
}

export default Footer;
