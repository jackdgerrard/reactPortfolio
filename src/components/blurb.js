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
          and PHP. I am currently looking to expand my portfolio with real
          client work. If you need some web work done let me know.
        </p>
        <p>
          I aim to be a full-time full stack developer. Have a look around at my
          portfolio, feel free to contact me for any reason at all.
        </p>
      </section>
    );
  }
}

export default blurb;
