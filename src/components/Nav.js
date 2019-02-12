import React, { Component } from 'react';

class Nav extends Component {
  render(){
    return (
    <svg id="burger-menu" width="30" class="openmenu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
      <path class="top" d="M0 9h30v2H0z" />
      <line class="mid" x1="0" y1="15" x2="30" y2="15" stroke="black" stroke-width="2" vector-effect="non-scaling-stroke" />
      <path class="bot" d="M0 19h30v2H0z" />
    </svg>
)
  }
}

export default Nav;