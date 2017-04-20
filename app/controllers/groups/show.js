import Ember from 'ember';

/* Returns a function, that, as long as it continues to be invoked, will not
   be triggered. The function will be called after it stops being called for
   N milliseconds.
*/
function debounce(func, wait) {
  let timeout;
  return function() {
    const context = this, args = arguments;
    const later = function() {
      timeout = null;
    };
    const callNow = !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow)
      func.apply(context, args);
  };
}

function userSearchFn(query) {
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

function projectSearchFn(query) {
  if (query) {
    const results = this.get('store').query('node', {
      filter: {
        title: {
          icontains: query
        }
      }
    });
    this.set('projectSearchResults', results);
  } else {
    this.set('projectSearchResults', []);
  }
}

export default Ember.Controller.extend({
  store: Ember.inject.service(),
  debounceLimit: 200,

  userSearchResults: [],
  userSearchQuery: '',

  projectSearchResults: [],
  projectSearchQuery: '',

  showAddUser: false,
  showAddProject: false,
  actions: {
    userSearch: debounce(userSearchFn, this.debounceLimit),
    clearUserSearch() {
      this.set('userSearchQuery', '');
      this.set('userSearchResults', []);
      this.toggleProperty('showAddUser');
    },
    projectSearch: debounce(projectSearchFn, this.debounceLimit),
    clearProjectSearch() {
      this.set('projectSearchQuery', '');
      this.set('projectSearchResults', []);
      this.toggleProperty('showAddProject');
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
