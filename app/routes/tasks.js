import Ember from 'ember';

export default Ember.Route.extend({
  currentUser: Ember.inject.service(),
  session: Ember.inject.service(),
  user: null,
  model() {
    if (this.get('session.isAuthenticated')) {
      return this.get('currentUser')
        .load()
        .then(user => {
          this.set('user', user);
          return {
            projects: this.store.query('node', {
              filter: {
                contributors: user.id
              }
            })
          };
        });
    } else {
      this.transitionTo('login');
    }
  }
});
