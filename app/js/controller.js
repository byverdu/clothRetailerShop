'use strict';

angular.module('shopControllers',[])
	
	.controller('ClothCtrl',['$scope','ClothService',function($scope,ClothService){

		$scope.products = ClothService;

	}]);