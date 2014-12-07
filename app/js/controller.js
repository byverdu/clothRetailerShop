/*global angular*/
'use strict';

angular.module('shopControllers',[])
	
	.controller('ClothCtrl',['$scope','ClothService',function($scope,ClothService){

		$scope.products   = ClothService.cloth;
		$scope.sharedCart = ClothService.sharedCart;

		$scope.addItem = function($index){


			var thisCloth = $scope.products[$index];

			thisCloth.stock -= 1;

			ClothService.sharedCart.push(thisCloth);

			console.log(ClothService.sharedCart);
		};

	}])

	.controller('CartCtrl',['$scope','ClothService',function($scope,ClothService){

		$scope.sharedCart = ClothService.sharedCart;

		$scope.totalPrice = function(){

			var price = 0;

			angular.forEach($scope.sharedCart,function(cloth){
				price += cloth.price;
			});

			return price;
		};

		$scope.removeItem = function($index){
			ClothService.sharedCart.splice($index,1);
		};
	}]);