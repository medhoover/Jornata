angular.module('starter.services', ['ngResource'])

.factory('denonces', function($resource) {
  return $resource('js/calls/denonces.json');
})
.factory('deputes', function($resource) {
  return $resource('js/calls/deputes.json');
})
.factory('questions', function($resource) {
  return $resource('js/calls/questions.json');
})
