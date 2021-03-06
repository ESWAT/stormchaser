import '../styles/display.scss';

import React from 'react';
import DisplayActions from '../actions/DisplayActions';
import DisplayStore from '../stores/DisplayStore';
import TalentTiers from './TalentTiers';

var Display = React.createClass({
  getInitialState() {
    return DisplayStore.getState();
  },

  componentDidMount() {
    DisplayStore.listen(this.onChange);
  },

  onChange() {
    this.setState({
      visible: DisplayStore.getState().visible,
      hero: DisplayStore.getState().hero
    });
  },

  componentDidUnmount() {
    DisplayStore.unlisten(this.onChange);
  },

  render() {
    if (this.state.visible && this.state.hero) {
      return (
        <div className='Display'>
          <p className='Display-name'>{this.state.hero.name}</p>
          <p className='Display-role'>{this.state.hero.role}</p>
          <p className='Display-winPercent'>{this.state.hero.winPercent + '%'} <span className='Display-winPercentLabel'>WIN RATE</span></p>
          <TalentTiers talents={this.state.hero.talents} />
        </div>
      )
    }
    else {
      return null;
    }
  }
})

export default Display;
