import React from 'react';

var Talent = React.createClass({
  render() {
    return (
      <li className='Talent-item'>{this.props.name}</li>
    )
  }
});

export default Talent;
