import Ember from 'ember';

export default Ember.Controller.extend({
  showInput: false,
  title: '',

  actions: {
    toggleShow() {
      this.toggleProperty('showInput');
    },
    addItem(name) {
      this.toggleProperty('showInput');
      this.set('title', '');
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
