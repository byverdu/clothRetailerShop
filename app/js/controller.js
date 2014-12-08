/*global angular*/

'use strict';
var shopControllers = angular.module('shopControllers',[]);

var TooltipCtrl = function(scope){
	scope.normalTooltip  = 'Any order has';
	scope.fiftyTooltip   = 'Spending 50 quid has';
	scope.seventyTooltip = 'Spending 75 quid and a Footwear item';
};

var ClothCtrl = function(scope,ClothService) {
	scope.products   = ClothService.cloth;
	scope.sharedCart = ClothService.sharedCart;

	scope.addItem = function(index){

		var thisCloth = scope.products[index];

		thisCloth.stock -= 1;

		ClothService.sharedCart.push(thisCloth);
	};

	scope.checkStock = function(index){
		return scope.products[index].stock === 0 ? true : false ;
	};
};


var CartCtrl = function(scope,ClothService){
		scope.sharedCart   = ClothService.sharedCart;
		scope.thisDisc     = null;
		scope.isDisplayed  = false;
		scope.isDiscounted = false;
		scope.fiftyButton  = true;
		scope.seventyButton= true;
		scope.discounts    = {

			normalDisc: 5,
			fiftyDisc: 10,
			senventyFiveDisc:15
		};

		scope.removeItem = function(index){
			ClothService.sharedCart[index].stock += 1;
			ClothService.sharedCart.splice(index,1);
		};

		scope.totalPrice = function(){

			var price = 0;

			angular.forEach(scope.sharedCart,function(cloth){
				price += cloth.price;
			});

			if(price > 0){
				scope.isDisplayed  = true;
			} else {
				scope.isDisplayed  = false;
				scope.isDiscounted = false;
			}

			if (price > 50) {
				scope.fiftyButton = false;
			} else{
				scope.fiftyButton = true;
			}

			if(price > 75 && scope.checkFootWear()){
				scope.seventyButton  = false;
			} else{
				scope.seventyButton  = true;
			}

			return price;
		};

		scope.selectDisc = function(discount){
			scope.isDiscounted = true;
			return scope.thisDisc = discount;
		};
		scope.applyDisc = function(){
			var total = scope.totalPrice();

			return (total-((scope.thisDisc/100)*total));
		};
		scope.priceDisc = function(){
			return scope.applyDisc();
		};
		scope.checkFootWear = function(){
			var checker = false;
			angular.forEach(scope.sharedCart,function(cloth){
					var category = cloth.category.split(' ').pop();

					if(category === 'Footwear'){

						checker = true;
					}
			});

			return checker;
		};
};

shopControllers.controller('TooltipCtrl',['$scope',TooltipCtrl]);
shopControllers.controller('ClothCtrl',['$scope','ClothService',ClothCtrl]);
shopControllers.controller('CartCtrl',['$scope','ClothService',CartCtrl]);
