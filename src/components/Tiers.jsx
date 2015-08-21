import React from 'react';
import Talent from './Talent.jsx';

var Tiers = React.createClass({
  render() {
    var tiers = this.props.talents;

    return (
      <div className='Talents'>
        {Object.keys(tiers).map((key) => {
          return (
            <ul className='Talent-tier'>
              {tiers[key].map((talent) => {
                return <Talent name={talent.name} />
              })}
            </ul>
          )
        })}
      </div>
    )
  }
});

export default Tiers;
