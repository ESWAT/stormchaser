import React from 'react';
import Talent from './Talent.jsx';

var TalentTiers = React.createClass({
  render() {
    var tiers = this.props.talents;

    return (
      <div className='TalentsTiers'>
        {Object.keys(tiers).map((key) => {
          return (
            <ul className='TalentTier-tier'>
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

export default TalentTiers;
