angular.module('starter.controllers', ['ngResource'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/social/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
.controller('DenoncesCtrl', function($scope, $ionicModal, denonces) {

  $scope.denonces = denonces.query();


  $scope.scrollTop = function() {
   $ionicScrollDelegate.scrollTop();
 };

})
.controller('DeputesCtrl', function($scope, $ionicModal, deputes) {
  $scope.deputes=deputes.query();
  $scope.scrollTop = function() {
   $ionicScrollDelegate.scrollTop();
 };

})


 .controller('QuestionCtrl', function($scope, $ionicModal, questions) {

   $scope.questions = questions.query();
})
.controller('DeputeCtrl', function($scope, $ionicModal, $resource, $stateParams, deputes) {
$scope.did = $stateParams.deputeId;
$scope.deputes = deputes.query();


})

.controller('NewDenonceCtrl', function($scope, $ionicModal, $cordovaCamera, $cordovaFile, deputes) {
$scope.deputes = deputes.query();

console.log($scope.deputes);
  $scope.images = [];

  $scope.scrollTop = function() {
     $ionicScrollDelegate.scrollTop();
   };

  $scope.addImage = function() {
// 2
var options = {
  destinationType : Camera.DestinationType.FILE_URI,
  sourceType : Camera.PictureSourceType.CAMERA, // Camera.PictureSourceType.PHOTOLIBRARY
  allowEdit : false,
  encodingType: Camera.EncodingType.JPEG,
  popoverOptions: CameraPopoverOptions,
};

// 3
$cordovaCamera.getPicture(options).then(function(imageData) {

  // 4
  onImageSuccess(imageData);

  function onImageSuccess(fileURI) {
    createFileEntry(fileURI);
  }

  function createFileEntry(fileURI) {
    window.resolveLocalFileSystemURL(fileURI, copyFile, fail);
  }

  // 5
  function copyFile(fileEntry) {
    var name = fileEntry.fullPath.substr(fileEntry.fullPath.lastIndexOf('/') + 1);
    var newName = makeid() + name;

    window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function(fileSystem2) {
      fileEntry.copyTo(
        fileSystem2,
        newName,
        onCopySuccess,
        fail
      );
    },
    fail);
  }

  // 6
  function onCopySuccess(entry) {
    $scope.$apply(function () {
      $scope.images.push(entry.nativeURL);
    });
  }

  function fail(error) {
    console.log("fail: " + error.code);
  }

  function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i=0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

}, function(err) {
  console.log(err);
});
}
$scope.urlForImage = function(imageName) {
  var name = imageName.substr(imageName.lastIndexOf('/') + 1);
  var trueOrigin = cordova.file.dataDirectory + name;
  return trueOrigin;
}


})
