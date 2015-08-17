import '../styles/display.scss';

import React from 'react';
import DisplayActions from '../actions/DisplayActions';
import DisplayStore from '../stores/DisplayStore';

var Display = React.createClass({
  getInitialState() {
    return DisplayStore.getState();
  },

  componentDidMount() {
    DisplayStore.listen(this._onChange);
  },

  _onChange() {
    this.setState({
      visible: DisplayStore.getState().visible,
      hero: DisplayStore.getState().hero
    });
  },

  render() {
    if (this.state.visible && this.state.hero) {
      return (
        <div className='Display'>
          <p>{this.state.hero.name}</p>
          <p>{this.state.hero.role}</p>
          <p>{this.state.hero.winPercent + '%'}</p>
        </div>
      )
    }
    else {
      return null;
    }
  }
})

export default Display;
