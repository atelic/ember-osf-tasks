import Ember from 'ember';

export default Ember.Controller.extend({
  show: false,
  title: '',
  groups: ['Writers', 'Abolitionists'],
  showGroups: Ember.computed.notEmpty('groups'),
  actions: {
    toggleShow() {
      this.toggleProperty('show');
    },
    addItem(name) {
      this.toggleProperty('show');
      this.set('title', '');
      const g = this.get('groups');
      this.set('groups', g.concat([name]));
      const group = this.store.createRecord('group', {
        name: name,
        users: []
      });
      group.save();
    }
  }
});
