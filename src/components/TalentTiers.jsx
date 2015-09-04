import '../styles/talentTiers.scss';

import React from 'react';
import Talent from './Talent.jsx';

var TalentTiers = React.createClass({
  render() {
    var tiers = this.props.talents;

    return (
      <div className='TalentTiers'>
        {Object.keys(tiers).map((key) => {
          return (
            <ul className='TalentTier'>
              {tiers[key].map((talent) => {
                return <Talent name={talent.name} optimal={talent.optimal} label={talent.optimal ? key : null} />
              })}
            </ul>
          )
        })}
      </div>
    )
  }
});

export default TalentTiers;
