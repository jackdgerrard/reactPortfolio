/***********
 ** Imports
 ************/

//react
import React, {
  Component
} from "react";

/*************
 ** social networks
 ***************/

class social extends Component {
  render() {
    return ( <
      section id = "social" >
      <
      h2 > Social Networks And Other Platforms < /h2>

      <
      a href = "https://twitter.com/Jack_Grrd"
      id = "twitter" >
      <
      i class = "fa fa-twitter-square"
      aria - hidden = "true" / >
      <
      /a> <
      a href = "https://github.com/jackdgerrard"
      id = "github" >
      <
      i className = "fa fa-github"
      aria - hidden = "true" / >
      <
      /a> <
      a href = "https://www.instagram.com/jack_grrd/?hl=en"
      id = "instagram" >
      <
      i class = "fa fa-instagram"
      aria - hidden = "true" / >
      <
      /a> <
      a href = "https://codepen.io/spectral"
      id = "codepen" >
      <
      i className = "fa fa-codepen"
      aria - hidden = "true" / >
      <
      /a> <
      a href = "https://www.linkedin.com/in/jack-gerrard-627bb9107/"
      id = "linkedIn" >
      in
      <
      /a> <
      /section>
    );
  }
}

export default social;