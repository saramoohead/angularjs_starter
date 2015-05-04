Guidebook.controller('chapterController',
    function ($scope, $location, $routeParams, chapterModel, noteModel) {
        var chapters = chapterModel.getChapters();
        for (var i=0; i<chapters.length; i++) {
          chapters[i].notes =
          noteModel.getNotesForChapter(chapters[i].id);
          $scope.chapters = chapters;
          $scope.selectedChapterId = $routeParams.chapterId;
          $scope.onDelete = function(noteId) {
              var confirmDelete = confirm('Are you sure you want to delete this note?');
                  if (confirmDelete) {
                      $location.path('/deleteNote/' + $routeParams.chapterId + '/' + noteId);
                  }
            };
        }
    });