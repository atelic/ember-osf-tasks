import Ember from 'ember';

export default Ember.Route.extend({
  currentUser: Ember.inject.service(),
  user: null,
  model() {
    return this.get('currentUser')
      .load()
      .then(user => {
        this.set('user', user);
        return user;
      });
  }
});
