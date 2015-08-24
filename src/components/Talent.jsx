import React from 'react';

var Talent = React.createClass({
  render() {
    let klass = 'Talent';
    klass += this.props.optimal ? ' Talent--optimal' : '';

    return (
      <li className={klass}>{this.props.name}</li>
    )
  }
});

export default Talent;
