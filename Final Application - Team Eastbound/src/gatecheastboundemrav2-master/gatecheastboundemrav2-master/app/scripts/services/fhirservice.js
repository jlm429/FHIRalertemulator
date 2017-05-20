'use strict';
/**
 * @ngdoc service
 * @name gatecheastboundemraApp.fhirService
 * @description
 * # fhirService
 * Factory in the gatecheastboundemraApp.
 */
angular.module('gatecheastboundemraApp').factory('fhirService', ['$http', function ($http) {
  // Service logic
  // ...

  return {
    getAllPatients: function () {
      //return $http.get('http://polaris.i3l.gatech.edu:8080/gt-fhir-webapp/base/Patient?_format=json',{timeout: 5000});  //GA TECH
      return $http.get('http://52.72.172.54:8080/fhir/baseDstu2/Patient?_format=json&_pretty=true',{timeout: 5000});   //MiHN

    },
    getPatient: function (patientId) {
      //return $http.get('http://polaris.i3l.gatech.edu:8080/gt-fhir-webapp/base/Patient?_id=' + patientId + '&_format=json',{timeout: 5000}); //GA TECH
      return $http.get('http://52.72.172.54:8080/fhir/baseDstu2/Patient?_id=' + patientId + '&_format=json',{timeout: 5000}); //MiHN
    },
    getPatientCondition: function(patientId) {
      //return $http.get('http://polaris.i3l.gatech.edu:8080/gt-fhir-webapp/base/Condition?patient=' + patientId + '&_format=json',{timeout: 5000});  //GA TECH
      return $http.get('http://52.72.172.54:8080/fhir/baseDstu2/Condition?patient=' + patientId + '&_format=json',{timeout: 5000}); //MiHN
    },

	searchPatient: function(patientId) {
      //return $http.get('http://polaris.i3l.gatech.edu:8080/gt-fhir-webapp/base/Condition?patient=' + patientId + '&_format=json',{timeout: 5000});  //GA TECH
      return $http.get('http://52.72.172.54:8080/fhir/baseDstu2/Patient?_content=' + patientId + '&_format=json',{timeout: 5000}); //MiHN
    }

  };
}]);
