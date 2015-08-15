import React from 'react';
import HeroActions from '../actions/HeroActions';
import HeroStore from '../stores/HeroStore';

var Heroes = React.createClass({
  getInitialState() {
    return HeroStore.getState();
  },

  componentDidMount() {
    HeroStore.listen(this._onChange);
    HeroActions.fetchHeroes();
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
      <ul>
        {this.state.heroes.map((hero) => {
          return (
            <li>{hero.name}</li>
          );
        })}
      </ul>
    );
  }
});

export default Heroes;
