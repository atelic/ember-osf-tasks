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
    },
    addUser(user, group) {
      const groupId = group.id;
      this.store.findRecord('group', groupId).then(group => {
        const users = group.get('users');
        if (users) {
          if (!users.includes(user.id))
            group.set('users', users.concat([user.id]));
        } else {
          group.set('users', [user.id]);
        }
        group.save();
      });

    },
    addProject(project, group) {
      const groupId = group.id;
      this.store.findRecord('group', groupId).then(group => {
        const projects = group.get('projects');
        if(projects) {
          if(!projects.includes(project.id))
            group.set('projects', projects.concat([project.id]));
          } else {
            group.set('projects', [project.id]);
          }
        group.save();
      });
    }
  }
});
