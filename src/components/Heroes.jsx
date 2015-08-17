import '../styles/heroes.scss';

import React from 'react';
import HeroActions from '../actions/HeroActions';
import DisplayActions from '../actions/DisplayActions';
import HeroStore from '../stores/HeroStore';
import Hero from './Hero';

var Heroes = React.createClass({
  getInitialState() {
    return HeroStore.getState();
  },

  componentDidMount() {
    HeroStore.listen(this._onChange);
    HeroActions.fetchHeroes();
  },

  handleHeroDisplay(hero) {
    DisplayActions.displayVisible(true);
    DisplayActions.populateDisplay(hero);
  },

  _onChange() {
    this.setState({
      heroes: HeroStore.getState().heroes,
      errorMessage: HeroStore.getState().errorMessage
    });
  },

  render() {
    if (this.state.errorMessage) {
      return (
        <div>Error!</div>
      )
    }

    if (!this.state.heroes.length) {
      return (
        <div>Loading…</div>
      )
    }

    return (
      <ul className='Heroes'>
        {this.state.heroes.map((hero) => {
          return (
            <Hero key={hero.id} name={hero.name} imageName={hero.imageName} onClick={this.handleHeroDisplay.bind(this, hero)} />
          );
        })}
      </ul>
    );
  }
});

export default Heroes;
