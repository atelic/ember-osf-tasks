import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  computedProject: function () {
    const id = this.get('project');
    return this.get('store').findRecord('node', id);
  }.property('project'),

  tagName: 'span'
});
