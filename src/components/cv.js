/***********
 ** Imports
 ************/

//react
import React, { Component } from "react";

/*****************
 ** CV container
 *****************/

class cv extends Component {
  render() {
    return (
      <section id="Curriculum-Vitae" className="glass">
        <h2>Downloadable curriculum vitae</h2>
        <form method="get" action="CV.pdf" target="_blank">
          <button class="myButton" type="submit">
            Open PDF <br />
            <i class="fa fa-external-link" aria-hidden="true" />
          </button>
        </form>
      </section>
    );
  }
}

export default cv;
