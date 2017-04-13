import Ember from 'ember';

export default Ember.Controller.extend({
  store: Ember.inject.service(),

  userSearchResults: [],
  userSearchQuery: '',

  projectSearchResults: [],
  projectSearchQuery: '',

  showAddUser: false,
  showAddProject: false,
  actions: {
    userSearch(query) {
      if (query) {
        const results = this.get('store').query('user', {
          filter: {
            full_name: query
          }
        });
        this.set('userSearchResults', results);
      } else {
        this.set('userSearchResults', []);
      }
    }
  },
  projectSearch(query) {
    if (query) {
      const results = this.get('store').query('node', {
        filter: {
          title: query
        }
      });
      this.set('projectSearchResults', results);
    } else {
      this.set('projectSearchResults', []);
    }
  },
  saveGroup(newName) {
    const groupId = this.get('model').id;
    this.store.findRecord('group', groupId).then(group => {
      group.set('name', newName);
      group.save();
    });

  },
  deleteGroup() {
    if (confirm('This will delete this entire group. Are you sure?')) {
      const groupId = this.get('model').id;
      this.store.findRecord('group', groupId).then(group => {
        group.destroyRecord();
        this.transitionToRoute('groups');
      });
    }
  },
  toggleAddUser() {
    this.toggleProperty('showAddUser');
  },
  addUser(user) {
    this.toggleProperty('showAddUser');
    const groupId = this.get('model').id;
    this.store.findRecord('group', groupId).then(group => {
      const users = group.get('users');
      if (users) {
        group.set('users', users.concat([user]));
      } else {
        group.set('users', [user]);
      }
      group.save();
    });
  },
  removeUser(user) {
    const groupId = this.get('model').id;
    this.store.findRecord('group', groupId).then(group => {
      let users = group.get('users');
      const idx = users.indexOf(user);
      users.splice(idx, 1);
      group.set('users', users);
      group.save();
    });
  },
  toggleAddProject() {
    this.toggleProperty('showAddProject');
  },
  addProject(proj) {
    this.toggleProperty('showAddProject');
    this.set('projectSearchResults', []);
    const groupId = this.get('model').id;
    this.store.findRecord('group', groupId).then(group => {
      const projects = group.get('projects');
      if (projects) {
        group.set('projects', projects.concat([proj]));
      } else {
        group.set('projects', [proj]);
      }
      group.save();
    });
  },
  removeProject(proj) {
    const groupId = this.get('model').id;
    this.store.findRecord('group', groupId).then(group => {
      let projects = group.get('projects');
      const idx = projects.indexOf(proj);
      projects.splice(idx, 1);
      group.set('projects', projects);
      group.save();
    });
  }
}
});
