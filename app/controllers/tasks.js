import Ember from 'ember';

export default Ember.Controller.extend({
  extraText: '',
  move: false,
  manage: false,
  actions: {
    changeText(option) {
      if (option === 'move contributors') {
        this.set('manage', false);
        this.set('move', true);
      } else {
        this.set('move', false);
        this.set('manage', true);
      }
    }
  }
});
