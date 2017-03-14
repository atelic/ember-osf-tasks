import Ember from 'ember';
import CurrentUserMixin from '../mixins/current-user';

export default Ember.Route.extend(CurrentUserMixin, {
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
