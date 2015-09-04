import React from 'react';

var Talent = React.createClass({
  render() {
    let klass = 'Talent';
    klass += this.props.optimal ? ' Talent--optimal' : '';

    let label = this.props.label ? <span className='Talent-label'>{this.props.label}</span> : null;

    return (
      <li className={klass}>
        {label}
        <span className='Talent-name'>{this.props.name}</span>
      </li>
    )
  }
});

export default Talent;
