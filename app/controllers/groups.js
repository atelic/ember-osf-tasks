import Ember from 'ember';

export default Ember.Controller.extend({
  showInput: false,
  title: '',
  groups: [{name:'Writers', users: ['Eric', 'Sky']}, {name:'Abolitionists', users: ['Kesha']}],
  showGroups: Ember.computed.notEmpty('groups'),

  actions: {
    toggleShow() {
      this.toggleProperty('showInput');
    },
    addItem(name) {
      this.toggleProperty('showInput');
      this.set('title', '');
      const g = this.get('groups');
      const newGroup = {
        name: name,
        users: []
      };
      this.set('groups', g.concat([newGroup]));
      const group = this.store.createRecord('group', newGroup);
      group.save();
    },
    groupFilter(title) {
      const groups = this.get('groups');
      groups.forEach(group => {
        if (group.name === title) {
          console.log(group.users);
        }
      });
    }
  }
});
