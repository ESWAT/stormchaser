import alt from '../alt';

class DisplayActions {
  displayVisible(visible) {
    this.dispatch(visible);
  }

  populateDisplay(hero) {
    this.dispatch(hero);
  }
}

export default alt.createActions(DisplayActions);
