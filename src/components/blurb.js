/***********
 ** Imports
 ************/

//react
import React, { Component } from "react";

/*************
 ** blurb
 ***************/

class blurb extends Component {
  render() {
    return (
      <section id="self" className="glass">
        <p>
          Hello, I'm Jack, A freelance web developer and second year web
          development student in Cork Institute of Technology.
        </p>
        <img
          src={require("./images/Jack-Gerrard.jpg")}
          alt="Jack Gerrard"
          id="portrait"
        />
        <p>
          I specialize in building responsive, dynamic web apps with JavaScript
          and PHP.
        </p>
        <p>
          I aim to be a full-time front end developer and eventually grow into
          project management and/or user experience development. If you've
          decided to hire me you can click the contact details above.
        </p>
      </section>
    );
  }
}

export default blurb;
