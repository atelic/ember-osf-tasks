import Ember from 'ember';

export default Ember.Route.extend({
  currentUser: Ember.inject.service(),

  model() {
    return {
      options: ['move contributors', 'manage permissions'],
      projects: this.store.query('node', {
        filter: {
          contributors: 'fktdp'
        }
      })
    };
  }
});
