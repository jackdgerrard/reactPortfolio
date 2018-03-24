/***********
 ** Imports
 ************/
//react
import React, { Component } from "react";

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
          {/* <article>
            <h4>
              <a href="https://www.norsemanInstruments.com">
                NorsemanInstruments.com
              </a>
            </h4>
            <p>
              I custom built a WordPress theme using
              <a href="/https://underscores.me/">UnderScores</a>, Sass, and a
              custom Javascript sidebar. I had to custom build the theme because
              the client specifically wanted to have a side navigation menu that
              would behave like a mobile application and I could not find a
              theme that supported this <i>and</i> reflected the Norseman
              Instruments aesthetic. I also needed a way to implement a cookie
              bar that followed EU cookie Law so I used my own and worked it in
              to this theme. This site is still a work in progress as the client
              is a start-up but it can be seen at
              <a href="https://www.norsemanInstruments.com">
                NorsemanInstruments.com
              </a>
            </p>
          </article> */}
          <article>
            <h4>Tempus, a to-do list with CRUD functionality</h4>
            <p>
              Rokas and I decided to build the worlds millionth to-do list
              application as a project for the 2017-2018 Christmas break from
              college. We used{" "}
              <a href="https://firebase.google.com/">Firebase</a> for the server
              functionality, <a href="https://vuejs.org/"> Vue.js </a> and{" "}
              <a href="http://materializecss.com/">Materialize Css </a> for the
              front end. It was a fun project and remixing materialize's sass
              was very rewarding. We intend to revisit this project during the
              summer to add multiple user functionality.<p>
                <a href="https://github.com/jackdgerrard/tempus">
                  You can view the source code here
                </a>.
              </p>
            </p>
          </article>
          <article>
            <h4>Static Nasa website</h4>
            <p>
              This was a project for using static HTML, CSS and Javascript in St
              John's. It can be seen at
              <a href="http://jackgerrard.io/space">
                jackgerrard.io/space
              </a>.{" "}
            </p>
            <p>
              I used Cookies for Javascript and flexbox to create a media
              gallery. Bootstrap was the main CSS framework.
            </p>
          </article>
          <article>
            <h4>Github and CodePen</h4>
            <p>
              CodePen is my go-to for trying, breaking and fixing front-end
              techniques and technologies. I store almost all of my code on
              Github for projects and college work. Feel free to poke around.{" "}
              <br />
              <a href="https://codepen.io/Spectral/" id="codepen">
                Link to codepen{" "}
                <i className="fa fa-codepen" aria-hidden="true" />
              </a>{" "}
              <br />
              <a href="https://github.com/jackdgerrard" id="github">
                Link to Github<i className="fa fa-github" aria-hidden="true" />
              </a>
            </p>
          </article>
        </section>
      </section>
    );
  }
}

export default Projects;
