'use strict';

/**
 * @ngdoc function
 * @name gatecheastboundemraApp.controller:FhirCtrl
 * @description
 * # FhirCtrl
 * Controller of the gatecheastboundemraApp
 */
angular.module('gatecheastboundemraApp')
  .controller('FhirCtrl', ['$scope', 'fhirService', function ($scope, fhirService) {

    $scope.feedbackMsg = "Connecting to GA Tech FHIR Service...., please wait!";

    //Fetch all Patients: 'getAllPatients'
    this.patientList = {};
    fhirService.getAllPatients()
      .success(function(response) {
        this.patientList = response;
        $scope.allPatients =  this.patientList;
        $scope.resourceType = this.patientList.resourceType;
        $scope.id = this.patientList.id;
        $scope.lastUpdated  = this.patientList.meta.lastUpdated;
        $scope.total  = this.patientList.total;
        $scope.patient1 = this.patientList.entry[0];
        $scope.fullUrl = this.patientList.entry[0].fullUrl;
        $scope.name = this.patientList.entry[0].resource.name[0].family[0] + ", " + this.patientList.entry[0].resource.name[0].given[0];

        $scope.feedbackMsg = "";
      }.bind(this))
      .error(function() {
        this.patientList = [{pattient_id: 0, pattient_name: 'Error Getting  Details'}];
        $scope.feedbackMsg = "GA Tech FHIR Server is unavailable, please try again later!";
      }.bind(this));


    //Fetch single patient: 'getPatient'
    this.patient = {};
    fhirService.getPatient(2)  //Get PatientId# 2
      .success(function(response) {
        this.patient = response;
        $scope.singlePatient =  this.patient;
        $scope.feedbackMsg = "";
      }.bind(this))
      .error(function() {
        this.patient = [{pattient_id: 0, pattient_name: 'Error Getting  Details'}];
        $scope.feedbackMsg = "GA Tech FHIR Server is unavailable, please try again later!";
      }.bind(this));

    //Fetch single patient: 'getPatient'
    this.patienCondition = {};
    fhirService.getPatientCondition(2)  //Get PatientId# 2 Condition
      .success(function(response) {
        this.patienCondition = response;
        $scope.patienCondition =  this.patienCondition;
        $scope.feedbackMsg = "";
      }.bind(this))
      .error(function() {
        this.patienCondition = [{pattient_id: 0, pattient_name: 'Error Getting  Details'}];
        $scope.feedbackMsg = "GA Tech FHIR Server is unavailable, please try again later!";
      }.bind(this));


  }]);

