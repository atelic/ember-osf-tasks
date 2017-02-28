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
        const payload = JSON.stringify({
          "to": to,
          "from": from
        });
        console.log(payload);
      } else {
        const from = $('#manageOn').val();
        const permission = $('#manageVal').val();
        const payload = JSON.stringify({
          "from": from,
          "permission": permission
        });
        console.log(payload);
      }
    }
  }
});
