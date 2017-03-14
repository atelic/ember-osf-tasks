import Ember from 'ember';
import CurrentUserMixin from '../mixins/current-user';

export default Ember.Route.extend(CurrentUserMixin, {
  model() {
    return {
      users: this.store.findAll('user'),
      projects: this.store.query('node', {
        filter: {
          contributors: this.get('user').id
        }
      })
    };
  }
});
