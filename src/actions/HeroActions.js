import alt from '../alt';
import Fetcher from '../utils/Fetcher';

class HeroActions {
  updateHeroes(heroes) {
    this.dispatch(heroes);
  }

  fetchHeroes() {
    this.dispatch();
    Fetcher.fetchData('data/heroData.json')
      .then((res) => {
        return res.json();
      })
      .then((heroes) => {
        this.actions.updateHeroes(heroes);
      })
      .catch((errorMessage) => {
        this.actions.heroesFailed(errorMessage);
      })
  }

  heroesFailed(errorMessage) {
    this.dispatch(errorMessage);
  }
}

export default alt.createActions(HeroActions);
