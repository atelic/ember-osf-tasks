import Ember from 'ember';
import config from 'ember-get-config';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  host: config.OSF.url,

  link: function() {
    const id = this.get('project');
    return this.get('host') + id;
  }.property('project'),

  computedProject: function () {
    const id = this.get('project');
    return this.get('store').findRecord('node', id);
  }.property('project'),

  actions: {
    makePublic() {
      if (confirm('Are you sure? This will make any sensitive data publicly visible')) {
        const id = this.get('project');
        this.get('store').findRecord('node', id).then(node => {
          node.set('public', true);
          node.save();
        });
      }
    }
  },

  tagName: 'span'
});
