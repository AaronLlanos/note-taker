angular.module('starter.controllers', [])

.controller('NotesCtrl', function($scope, Notes) {
  $scope.log = function (id){
    console.log('what', id);
  };
  $scope.notes = Notes.all();
  $scope.remove = function(note) {
    Notes.remove(note);
  };
})

.controller('NoteDetailCtrl', function($scope, $stateParams, Notes) {
  $scope.note = Notes.get($stateParams.noteId);
})

.controller('CalendarCtrl', function($scope, Notes) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.notes = Notes.all();
  $scope.remove = function(note) {
    Notes.remove(note);
  };
})

// .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
//   $scope.chat = Chats.get($stateParams.chatId);
// })

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
