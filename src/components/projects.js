/***********
 ** Imports
 ************/

//react
import React, { Component } from "react";

//projects
import projects from "./projects.json";

/*************
 ** projects
 ***************/

class Projects extends Component {
  render() {
    return (
      <section id="projects">
        <h2>Projects</h2>
        <h3>A selection of projects I'm most proud of</h3>

        <section className="flexbox" />

        <p>
          <a href="https://github.com/jackdgerrard">
            <i className="fa fa-github" aria-hidden="true" />Link to my github
          </a>
        </p>

        <p>
          <a href="https://codepen.io/">
            <i className="fa fa-codepen" aria-hidden="true" />Link to my CodePen
            profile
          </a>
        </p>
      </section>
    );
  }
}

export default Projects;
