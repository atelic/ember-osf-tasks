import Ember from 'ember';

export default Ember.Route.extend({
  currentUser: Ember.inject.service(),
  user: null,

  _loadCurrentUser() {
    this.get('currentUser')
      .load()
      .then(user => {
        this.set('user', user);
      });
  },
  init() {
    this._super(...arguments);
    this._loadCurrentUser();
  },
  model() {
    // let id = this.get('user').id;
    return {
      projects: this.store.query('node', {
        filter: {
          contributors: 'fktdp'
        }
      })
    };
  }
});
