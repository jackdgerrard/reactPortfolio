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
        <p>
          I specialize in responsive, dynamic{" "}
          <a href="https://www.javascript.com/">JavaScript</a> apps.
        </p>
        <p>
          I aim to be a full-time front end developer and eventually grow into
          project management or user experience. If you've decided to hire me
          you can click the contact details above or at the bottom of the
          portfolio.
        </p>
      </section>
    );
  }
}

export default blurb;
