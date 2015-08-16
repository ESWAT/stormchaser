import React from 'react';

var Hero = React.createClass({
  render() {
    var imgSrc = require('../images/heroes/' + this.props.imageName + '.jpg');

    return (
      <li>
        <img src={imgSrc} />
        <p>{this.props.name}</p>
      </li>
    )
  }
})

export default Hero;
