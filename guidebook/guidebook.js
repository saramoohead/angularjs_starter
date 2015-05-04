var guidebookConfig = function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'chapterController',
            templateUrl: 'view/chapters.html'
        })
        .when('/chapter/:chapterId', {
            controller: 'chapterController',
            templateUrl: 'view/chapters.html'
        })
        .when('/addNote/:chapterId', {
            controller: 'addNoteController',
            templateUrl: 'view/addNote.html'
        })
        .when('/deleteNote/:chapterId/:noteId', {
          controller: 'deleteNoteController',
          templateUrl: 'view/addNote.html'
        })
    ;
};

var Guidebook = angular.module('Guidebook', []).config(guidebookConfig);