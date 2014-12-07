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
		};

	}])

	.controller('CartCtrl',['$scope','ClothService',function($scope,ClothService){

		$scope.sharedCart = ClothService.sharedCart;
		$scope.thisDisc   = null;
		$scope.discounts  = {

			normalDisc: 5,
			fiftyDisc: 10,
			senventyFiveDisc:15
		};

		$scope.removeItem = function($index){
			ClothService.sharedCart.splice($index,1);
		};

		$scope.totalPrice = function(){

			var price = 0;

			angular.forEach($scope.sharedCart,function(cloth){
				price += cloth.price;
			});

			return price;
		};

		$scope.selectDisc = function(discount){
			return $scope.thisDisc = discount;
		};


		$scope.applyDisc = function(){
			var total = $scope.totalPrice();

			return (total-(($scope.thisDisc/100)*total));
		};

		$scope.priceDisc = function(){
			return $scope.applyDisc();
		};

		$scope.checkFootWear = function(){
			var checker = false;
			angular.forEach($scope.sharedCart,function(cloth){
					var category = cloth.category.split(' ').pop();

					if(category === 'Footwear'){

						checker = true;
					}
			});

			return checker;
		};

	}]);