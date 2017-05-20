'use strict';

/**
 * @ngdoc function
 * @name gatecheastboundalarmemulatorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gatecheastboundalarmemulatorApp
 */
angular.module('gatecheastboundalarmemulatorApp')
  .controller('MainCtrl', function ($scope) {

    //AngularJS Firebase Reference:
    //https://www.firebase.com/docs/web/libraries/angular/guide/intro-to-angularfire.html
    //https://www.firebase.com/docs/web/guide/saving-data.html

    var fireBaseURL = "https://alertemulator.firebaseio.com/";

    var firebaseCdcAlert = new Firebase(fireBaseURL);
    firebaseCdcAlert.child("communications/0/text/status/").on("value", function(snapshot) {
      $scope.$apply(function() {
        //F03B20  CDC Alert
        if(snapshot.val() == 0){
          $scope.cdcalert ="panel-border-cdcalert";
        }
        else {
          $scope.cdcalert ="panel-cdcalert";
        }
      });
    });

    var firebaseNewGenericDrug = new Firebase(fireBaseURL);
    firebaseNewGenericDrug.child("communications/1/text/status/").on("value", function(snapshot) {
      $scope.$apply(function() {
        //FD8D3C  New Generic Drug
        if(snapshot.val() == 0){
          $scope.newgeneric ="panel-border-newgeneric";
        }
        else {
          $scope.newgeneric ="panel-newgeneric";
        }
      });
    });

    var firebaseNewGenericDrug = new Firebase(fireBaseURL);
    firebaseNewGenericDrug.child("communications/2/text/status/").on("value", function(snapshot) {
      $scope.$apply(function() {
        //BD0026 New Vaccine
        if(snapshot.val() == 0){
          $scope.newvaccine ="panel-border-newvaccine";
        }
        else {
          $scope.newvaccine ="panel-newvaccine";
        }
      });
    });

    var firebaseNewGenericDrug = new Firebase(fireBaseURL);
    firebaseNewGenericDrug.child("communications/3/text/status/").on("value", function(snapshot) {
      $scope.$apply(function() {
        //FECC5C FDA Drug Recall
        if(snapshot.val() == 0){
          $scope.fdarecall ="panel-border-fdarecall";
        }
        else {
          $scope.fdarecall ="panel-fdarecall";
        }
      });
    });

    $scope.alertClicked = function( commNumber ) {

      var firebaseRef = new Firebase(fireBaseURL);
      var firebaseChildUrl = "communications/" +  commNumber + "/text/"
      var alertStatusRef = firebaseRef.child(firebaseChildUrl);

      switch (commNumber) {
        case '0':
          //F03B20  CDC Alert
          if($scope.cdcalert == "panel-cdcalert"){
            $scope.cdcalert ="panel-border-cdcalert";

            alertStatusRef.update({
              "status": "0"
            });
          }
          else {
            $scope.cdcalert ="panel-cdcalert";
            alertStatusRef.update({
              "status": "1"
            });
          }

          break;
        case '1':
          //FD8D3C  New Generic Drug
          var newGenericStatusRef = firebaseRef.child(firebaseChildUrl);
          if($scope.newgeneric == "panel-newgeneric"){
            $scope.newgeneric ="panel-border-newgeneric";

            alertStatusRef.update({
              "status": "0"
            });
          }
          else {
            $scope.newgeneric ="panel-newgeneric";
            alertStatusRef.update({
              "status": "1"
            });
          }

          break;
        case '2':
          //BD0026 New Vaccine

          var newVaccineStatusRef = firebaseRef.child(firebaseChildUrl);
          if($scope.newvaccine == "panel-newvaccine"){
            $scope.newvaccine ="panel-border-newvaccine";

            alertStatusRef.update({
              "status": "0"
            });
          }
          else {
            $scope.newvaccine ="panel-newvaccine";
            alertStatusRef.update({
              "status": "1"
            });
          }

          break;
        case '3':
          //FECC5C FDA Drug Recall
          var fdaRecallStatusRef = firebaseRef.child(firebaseChildUrl);
          if($scope.fdarecall == "panel-fdarecall"){
            $scope.fdarecall ="panel-border-fdarecall";

            alertStatusRef.update({
              "status": "0"
            });
          }
          else {
            $scope.fdarecall ="panel-fdarecall";
            alertStatusRef.update({
              "status": "1"
            });
          }

          break;
        default:
      }
    }


  });
