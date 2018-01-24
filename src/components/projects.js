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
        <section className="flexbox">
          {JSON.stringify(this.props.projects)}
        </section>
      </section>
    );
  }
}

export default Projects;
