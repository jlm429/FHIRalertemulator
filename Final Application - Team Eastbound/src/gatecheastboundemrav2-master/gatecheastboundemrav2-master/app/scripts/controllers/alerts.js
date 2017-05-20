'use strict';

/**
 * @ngdoc function
 * @name gatecheastboundemraApp.controller:AlertsCtrl
 * @description
 * # AlertsCtrl
 * Controller of the gatecheastboundemraApp
 */
angular.module('gatecheastboundemraApp')
  .controller('AlertsCtrl', function ($scope, $timeout) {

    $timeout(function() {

      var fireBaseURL = "https://alertemulator.firebaseio.com/";
      var firebaseCdcAlert = new Firebase(fireBaseURL);

      firebaseCdcAlert.child("communications/0/text/status/").once("value", function(snapshot) {
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
      firebaseNewGenericDrug.child("communications/1/text/status/").once("value", function(snapshot) {
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
      firebaseNewGenericDrug.child("communications/2/text/status/").once("value", function(snapshot) {
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
      firebaseNewGenericDrug.child("communications/3/text/status/").once("value", function(snapshot) {
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

    }, 1000);

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

  });

