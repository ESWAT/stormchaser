import React from 'react';

var Hero = React.createClass({
  render() {
    var imgSrc = require('../images/heroes/' + this.props.imageName + '.jpg');

    return (
      <li className='Hero' onClick={this.props.onClick}>
        <img className='Hero-image' src={imgSrc} width='206' height='300' />
        <p className='Hero-name'>{this.props.name}</p>
      </li>
    )
  }
})

export default Hero;
