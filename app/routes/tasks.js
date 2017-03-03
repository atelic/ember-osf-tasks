import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  currentUser: Ember.inject.service(),
  user: null,

  _loadCurrentUser() {
    this.get('currentUser')
      .load()
      .then(user => this.set('user', user));
  },
  init() {
    this._super(...arguments);
    this._loadCurrentUser();
  },

  model() {
    return {
      projects: this.store.query('node', {
        filter: {
          contributors: this.get('user').id
        }
      })
    };
  }
});
