import React from 'react';

var Talent = React.createClass({
  render() {
    return (
      <li className='TalentTier-talent'>{this.props.name}</li>
    )
  }
});

export default Talent;
