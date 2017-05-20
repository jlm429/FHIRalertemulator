'use strict';

/**
 * @ngdoc function
 * @name gatecheastboundemraApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the gatecheastboundemraApp
 */
angular.module('gatecheastboundemraApp')
  .controller('SearchCtrl', ['$scope', 'fhirService', function ($scope, fhirService) {

	//Search - 'getPatient'
	$scope.getPatient = function(){
    this.patient = {};
    fhirService.searchPatient($scope.getPatientText)  //Get PatientId# 2
      .success(function(response) {
        this.patient = response;
        $scope.singlePatient =  this.patient;
        $scope.feedbackMsg = "";
      }.bind(this))
      .error(function() {
		fhirService.getPatientText = 'error';
        this.patient = [{pattient_id: 0, pattient_name: 'Error Getting  Details'}];
        $scope.feedbackMsg = "GA Tech FHIR Server is unavailable, please try again later!";
      }.bind(this));
	}

		//Search - 'getPatient'
	$scope.clearResults = function(){
		$scope.singlePatient =  '';
		$scope.getPatientText = '';
	}

  }]);
