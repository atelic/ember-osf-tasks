import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const CurrentUserMixin = Ember.Mixin.create(AuthenticatedRouteMixin, {
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
  }
});

export default CurrentUserMixin;
