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
    HeroStore.listen(this.onChange);
    HeroActions.fetchHeroes();
  },

  componentWillUnmount() {
    HeroStore.unlisten(this.onChange);
  },

  onChange() {
    this.setState({
      heroes: HeroStore.getState().heroes,
      errorMessage: HeroStore.getState().errorMessage
    });
  },

  handleHeroDisplay(hero, event) {
    event.preventDefault();
    DisplayActions.displayVisible(true);
    DisplayActions.populateDisplay(hero);
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
