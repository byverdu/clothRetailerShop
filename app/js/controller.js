'use strict';

angular.module('shopControllers',[])
	
	.controller('ClothCtrl',['$scope','ClothService',function($scope,ClothService){

		$scope.products   = ClothService.cloth;
		$scope.sharedCart = ClothService.sharedCart;

		$scope.addItem = function($index){
			ClothService.sharedCart.push($scope.products[$index]);

		};

	}])

	.controller('CartCtrl',['$scope','ClothService',function($scope,ClothService){

		$scope.sharedCart = ClothService.sharedCart;
	}]);