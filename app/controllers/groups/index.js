import Ember from 'ember';

export default Ember.Controller.extend({
  showInput: false,

  actions: {
    toggleShow() {
      this.toggleProperty('showInput');
    },
    addItem(name) {
      this.toggleProperty('showInput');
      const newGroup = {
        name: name,
        users: [],
        projects: []
      };
      const group = this.store.createRecord('group', newGroup);
      group.save();
    }
  }
});
