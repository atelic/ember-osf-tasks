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
    },
    runTask() {
      if (this.get('move')) {
        const from = $('#moveFrom').val();
        const to = $('#moveTo').val();
        console.log(`TODO fire to lambda. fromId: ${from} toId: ${to}`);
      } else {
        const from = $('#manageFrom').val();
        const permission = $('manageVal').val();
        console.log(`TODO fire to lambda. fromId: ${from} with permission: ${permission}`);
      }
    }
  }
});
