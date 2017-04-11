import Ember from 'ember';
import config from 'ember-get-config';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  host: config.OSF.url,

  link: function() {
    const id = this.get('user');
    return this.get('host') + id;
  }.property('user'),

  computedUser: function () {
    const id = this.get('user');
    return this.get('store').findRecord('user', id);
  }.property('user'),

  tagName: 'span'
});
