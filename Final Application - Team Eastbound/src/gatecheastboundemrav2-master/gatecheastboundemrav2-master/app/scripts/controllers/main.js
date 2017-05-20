'use strict';

/**
 * @ngdoc function
 * @name gatecheastboundemraApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gatecheastboundemraApp
 */
angular.module('gatecheastboundemraApp')
  .controller('MainCtrl', ['$scope', 'fhirService','$timeout','$window', function ($scope, fhirService, $timeout, $window) {


    $scope.feedbackMsg = " OK";

    $scope.feedbackMsg = " connecting to MiHN FHIR Service..., please wait!";
    $scope.patientId = $window.patientId;
    $scope.test = "Hello";

    //Fetch single MiHN Patient by Patient ID
    this.patient = {};
    fhirService.getPatient($scope.patientId)
      .success(function(response) {
        this.patient = response;

        $scope.patient =  this.patient;
        $scope.patientFullUrl = this.patient.entry[0].fullUrl;
        $scope.patientLastUpdated = this.patient.entry[0].resource.meta.lastUpdated;
        $scope.patientLastname = this.patient.entry[0].resource.name[0].family[0];
        $scope.patientFirstname = this.patient.entry[0].resource.name[0].given[0];
        $scope.patientMiddlename = this.patient.entry[0].resource.name[0].given[1];
        $scope.patientResourceId = this.patient.entry[0].resource.id;
        $scope.patientBirthDate = this.patient.entry[0].resource.birthDate;
        $scope.patientGender = this.patient.entry[0].resource.gender;
        $scope.patientChartId = this.patient.id;
        $scope.patientAddressLine = this.patient.entry[0].resource.address[0].line[0];
        $scope.patientAddressCity = this.patient.entry[0].resource.address[0].city;
        $scope.patientAddressState = this.patient.entry[0].resource.address[0].state;
        $scope.patientAddressPostalCode = this.patient.entry[0].resource.address[0].postalCode;
        $scope.patientHomePhone = this.patient.entry[0].resource.telecom[0].value;
        $scope.patientWorkPhone = this.patient.entry[0].resource.telecom[1].value;
        $scope.patientEmail = this.patient.entry[0].resource.telecom[2].value;


        $scope.feedbackMsg = " OK";

      }.bind(this))
      .error(function() {
        this.patient = [{pattient_id: 0, pattient_name: 'Error Getting  Details'}];
        $scope.feedbackMsg = " MiNH FHIR Server is unavailable, please try again later!";
      }.bind(this));


    $scope.cdcalert ="populationAlert1Inactive";
    $scope.newgeneric ="populationAlert2Inactive";
    $scope.newvaccine ="populationAlert3Inactive";
    $scope.fdarecall ="populationAlert4Inactive";


    $scope.feedbackMsg = " OK";

    //AngularJS Firebase Reference:
    //https://www.firebase.com/docs/web/libraries/angular/guide/intro-to-angularfire.html
    //https://www.firebase.com/docs/web/guide/saving-data.html

    $timeout(function() {
      var fireBaseURL = "https://alertemulator.firebaseio.com/";
      var firebaseCdcAlert = new Firebase(fireBaseURL);

      firebaseCdcAlert.child("communications/0/text/status/").once("value", function(snapshot) {
        $scope.$apply(function() {
          //F03B20  CDC Alert
          if(snapshot.val() == 0){
            $scope.cdcalert ="populationAlert1Inactive";
          }
          else {
            $scope.cdcalert ="populationAlert1";
          }
        });
      });

      //Fetch all MiHN Patients
      /*
       this.patientList = {};
       fhirService.getAllPatients()
       .success(function(response) {
       this.patientList = response;
       $scope.allPatients =  this.patientList;
       */


      //Firebase Sync Communications Section used by Alerts System
      var firebaseNewGenericDrug = new Firebase(fireBaseURL);
      firebaseNewGenericDrug.child("communications/1/text/status/").once("value", function(snapshot) {
        $scope.$apply(function() {
          //FD8D3C  New Generic Drug
          if(snapshot.val() == 0){
            $scope.newgeneric ="populationAlert2Inactive";
          }
          else {
            $scope.newgeneric ="populationAlert2";
          }
        });
      });

      var firebaseNewGenericDrug = new Firebase(fireBaseURL);
      firebaseNewGenericDrug.child("communications/2/text/status/").once("value", function(snapshot) {
        $scope.$apply(function() {
          //BD0026 New Vaccine
          if(snapshot.val() == 0){
            $scope.newvaccine ="populationAlert3Inactive";
          }
          else {
            $scope.newvaccine ="populationAlert3";
          }
        });
      });

      var firebaseNewGenericDrug = new Firebase(fireBaseURL);
      firebaseNewGenericDrug.child("communications/3/text/status/").once("value", function(snapshot) {
        $scope.$apply(function() {
          //FECC5C FDA Drug Recall
          if(snapshot.val() == 0){
            $scope.fdarecall ="populationAlert4Inactive";
          }
          else {
            $scope.fdarecall ="populationAlert4";
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
          $scope.cdcalert ="populationAlert1Inactive";
        }
        else {
          $scope.cdcalert ="populationAlert1";
        }
      });
    });

    var firebaseNewGenericDrug = new Firebase(fireBaseURL);
    firebaseNewGenericDrug.child("communications/1/text/status/").on("value", function(snapshot) {
      $scope.$apply(function() {
        //FD8D3C  New Generic Drug
        if(snapshot.val() == 0){
          $scope.newgeneric ="populationAlert2Inactive";
        }
        else {
          $scope.newgeneric ="populationAlert2";
        }
      });
    });

    var firebaseNewGenericDrug = new Firebase(fireBaseURL);
    firebaseNewGenericDrug.child("communications/2/text/status/").on("value", function(snapshot) {
      $scope.$apply(function() {
        //BD0026 New Vaccine
        if(snapshot.val() == 0){
          $scope.newvaccine ="populationAlert3Inactive";
        }
        else {
          $scope.newvaccine ="populationAlert3";
        }
      });
    });

    var firebaseNewGenericDrug = new Firebase(fireBaseURL);
    firebaseNewGenericDrug.child("communications/3/text/status/").on("value", function(snapshot) {
      $scope.$apply(function() {
        //FECC5C FDA Drug Recall
        if(snapshot.val() == 0){
          $scope.fdarecall ="populationAlert4Inactive";
        }
        else {
          $scope.fdarecall ="populationAlert4";
        }
      });
    });


  }]);

