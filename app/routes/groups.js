import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      users: ['Emma Goldman', 'John Brown', 'Frederick Douglass'],
      projects: ['Alpha', 'Beta']
    };
  }
});
