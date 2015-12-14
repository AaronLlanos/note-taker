angular.module('starter.services', [])

.factory('Notes', function() {

  // Some fake testing data
  var notes = [{
    id: 0,
    title: 'Ben Sparrow',
    body: 'You on your way?'
  }, {
    id: 1,
    title: 'Max Lynx',
    body: 'Hey, it\'s me'
  }, {
    id: 2,
    title: 'Adam Bradleyson',
    body: 'I should buy a boat'
  }, {
    id: 3,
    title: 'Perry Governor',
    body: 'Look at my mukluks!'
  }, {
    id: 4,
    title: 'Mike Harrington',
    body: 'This is wicked good ice cream.'
  }];

  return {
    all: function() {
      return notes;
    },
    remove: function(note) {
      notes.splice(notes.indexOf(note), 1);
    },
    get: function(noteId) {
      for (var i = 0; i < notes.length; i++) {
        if (notes[i].id === parseInt(noteId)) {
          return notes[i];
        }
      }
      return null;
    }
  };
});
