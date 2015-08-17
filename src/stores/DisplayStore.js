import alt from '../alt';
import DisplayActions from '../actions/DisplayActions';

class DisplayStore {
  constructor() {
    this.visible = false;
    this.hero = null;

    this.bindListeners({
      handleDisplayVisible: DisplayActions.DISPLAY_VISIBLE,
      handlePopulateDisplay: DisplayActions.POPULATE_DISPLAY
    })
  }

  handleDisplayVisible(visible) {
    this.visible = visible;
  }

  handlePopulateDisplay(hero) {
    this.hero = hero;
  }
}

export default alt.createStore(DisplayStore, 'DisplayStore');
