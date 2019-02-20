import React, { Component } from 'react';

class Nav extends Component {
  render(){
    return (
    <svg id="burger-menu" width="60" class="openmenu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
      <path class="top" d="M0 9h30v2H0z" />
      <line class="mid" x1="0" y1="20" x2="30" y2="20" stroke="black" stroke-width="2" vector-effect="non-scaling-stroke" />
      <path class="bot" d="M0 30h30v2H0z" />
    </svg>
)
  }
}

export default Nav;