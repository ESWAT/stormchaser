import alt from '../alt';

class HeroActions {
  updateHeroes(heroes) {
    this.dispatch(heroes);
  }

  fetchHeroes() {
    this.dispatch();

    fetch('heroData.json')
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        this.actions.updateHeroes(res.heroes);
      })
      .catch((errorMessage) => {
        this.actions.heroesFailed(errorMessage);
      });
  }

  heroesFailed(errorMessage) {
    this.dispatch(errorMessage);
  }
}

export default alt.createActions(HeroActions);
