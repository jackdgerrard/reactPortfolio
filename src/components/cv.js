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
        <form method="get" action="CV.pdf">
          <button type="submit">Open PDF</button>
        </form>
      </section>
    );
  }
}

export default cv;
