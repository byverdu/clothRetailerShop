/*global it,expect,describe,beforeEach,inject*/
'use strict';

describe('CartCtrl', function() {

		var scope ,ctrl, service;

		var fakeCloth = {
			name: 'Almond Toe Court Shoes, Patent Black',
			category: 'Women’s Footwear',
			price: 99.00,
			stock: 5
		};

		beforeEach(module('shopApp'));
		
		beforeEach(inject(function($rootScope,$controller,ClothService){

			scope = $rootScope.$new();
			ctrl  = $controller('CartCtrl', {$scope: scope});
			service = ClothService;
		}));

		it('is defined', function() {
			expect(ctrl).not.to.be.undefined();
		});

		it('has a sharedCart with no items', function() {
			expect(scope.sharedCart).to.eq(service.sharedCart);
			expect(scope.sharedCart).to.have.length(0);	
		});

		it('can remove an item from the sharedCart', function() {
			scope.sharedCart.push(fakeCloth);
			expect(scope.sharedCart).to.have.length(1);
			scope.removeItem(0);	
			expect(scope.sharedCart).to.have.length(0);
		});

		it('show the price for 1 item', function() {
			scope.sharedCart.push(fakeCloth);
			var price = scope.sharedCart[0].price;
			
			expect(scope.totalPrice()).to.eq(price);
		});

		it('updates the price for 2 item', function() {
			scope.sharedCart.push(fakeCloth,fakeCloth);
			var price = (scope.sharedCart[0].price)+(scope.sharedCart[1].price);
			
			expect(scope.totalPrice()).to.eq(price);
		});
	});