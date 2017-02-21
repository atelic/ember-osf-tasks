import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    debugger;
    return {
      options: ['move contributors', 'manage permissions']
    };
  }
});
