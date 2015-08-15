import React from 'react';

var Hero = React.createClass({
  render() {
    return (
      <li>{this.props.name}</li>
    )
  }
})

export default Hero;
