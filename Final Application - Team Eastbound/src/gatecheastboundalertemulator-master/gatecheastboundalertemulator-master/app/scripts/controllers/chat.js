'use strict';
/**
 * @ngdoc function
 * @name gatecheastboundalarmemulatorApp.controller:ChatCtrl
 * @description
 * # ChatCtrl
 * A demo of using AngularFire to manage a synchronized list.
 */
angular.module('gatecheastboundalarmemulatorApp')
  .controller('ChatCtrl', function ($scope, Ref, $firebaseArray, $timeout) {
    // synchronize a read-only, synchronized array of messages, limit to most recent 10
    //$scope.messages = $firebaseArray(Ref.child('communications').limitToLast(1));

    $scope.messages = $firebaseArray(Ref.child('communications').child(0));

    //https://oscartest.firebaseio.com/communications/0/text/status



    // display any errors
    $scope.messages.$loaded().catch(alert);

    // provide a method for adding a message
    $scope.addMessage = function(newMessage) {
      if( newMessage ) {
        // push a message to the end of the array
        $scope.messages.$add({text: newMessage})
          // display any errors
          .catch(alert);
      }
    };

    function alert(msg) {
      $scope.err = msg;
      $timeout(function() {
        $scope.err = null;
      }, 5000);
    }
  });
