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
        <h2>Curriculum Vitae PDF</h2>
        Use this button if your browser has PDF support
        <form method="get" action="CV.pdf">
          <button class="myButton" type="submit">
            <a href="CV.pdf" target="_blank">
              download PDF <br />
              <i class="fa fa-external-link" aria-hidden="true" />
            </a>
          </button>
        </form>
      </section>
    );
  }
}

export default cv;
