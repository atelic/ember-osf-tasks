import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  computedUser: function () {
    const id = this.get('user');
    return this.get('store').findRecord('user', id);
  }.property('user'),

  tagName: 'span'
});
