import Ember from 'ember';

export default Ember.Controller.extend({
  show: false,
  title: '',
  groups: [],
  showGroups: Ember.computed.notEmpty('groups'),
  actions: {
    toggleShow() {
      this.toggleProperty('show');
    },
    addItem(name) {
      this.toggleProperty('show');
      this.set('title', '');
      const group = this.store.createRecord('group', {
        name: name,
        users: []
      });
      group.save();
    }
  }
});
