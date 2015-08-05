'use strict';

/**
 * @ngdoc function
 * @name metadataApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the metadataApp
 */
angular.module('metadataApp')
  .controller('MainCtrl',function ($scope,$timeout,$http,AccessToken) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  	$timeout(function() {
  		$scope.token = AccessToken.get();
  		var uri = $scope.token.instance_url+"/services/data/v34.0/tooling/query?q=Select+id,developername+from+customobject";
  		var promise = $http.get(uri, {headers : headers()});
  		promise.success(function(response) {
  			$scope.objects = response.records;
  		});
	}, 0);

  	var headers = function() {
    	return { Authorization: 'Bearer ' + AccessToken.get().access_token };
  	};
  });


