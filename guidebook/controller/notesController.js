Guidebook.controller('addNoteController',
    function ($scope, $location, $routeParams, noteModel) {
      var chapterId = $routeParams.chapterId;
      $scope.cancel = function() {
          $location.path('/chapter/' + chapterId);
      };
      $scope.createNote = function () {
          noteModel.addNote(chapterId, $scope.note.content);
          $location.path('/chapter/' + chapterId);
      };
    }
);

Guidebook.controller('deleteNoteController',
    function ($scope, $location, $routeParams, noteModel) {
        var chapterId = $routeParams.chapterId;
        noteModel.deleteNote(chapterId, $routeParams.noteId);
        $location.path('/chapter/' + chapterId);
    }
);