import $ from 'jquery';
import Ember from 'ember';

export default Ember.Controller.extend({
  extraText: '',
  move: false,
  manage: false,
  options: ['move contributors', 'manage permissions'],
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
        // TODO until AWS sdk can be loaded in ember this is all we can do
        const payload = JSON.stringify({ // eslint-disable-line no-unused-vars
          to: to,
          from: from
        });
      } else {
        const from = $('#manageOn').val();
        const permission = $('#manageVal').val();
        const payload = JSON.stringify({ // eslint-disable-line no-unused-vars
          from: from,
          permission: permission
        });
      }
    }
  }
});
