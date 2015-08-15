import alt from '../alt';
import HeroActions from '../actions/HeroActions';

class HeroStore {
  constructor() {
    this.heroes = [];
    this.errorMessage = null;

    this.bindListeners({
      handleUpdateHeroes: HeroActions.UPDATE_HEROES,
      handleFetchHeroes: HeroActions.FETCH_HEROES,
      handleHeroesFailed: HeroActions.HEROES_FAILED
    });
  }

  handleUpdateHeroes(heroes) {
    this.heroes = heroes;
    this.errorMessage = null;
  }

  handleFetchHeroes() {
    this.heroes = [];
  }

  handleHeroesFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }
}

export default alt.createStore(HeroStore, 'HeroStore');
