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

		it('has 3 possible discounts', function() {
			expect(scope.discounts).to.have.property('normalDisc').to.eq(5);
			expect(scope.discounts).to.have.property('fiftyDisc').to.eq(10);
			expect(scope.discounts).to.have.property('senventyFiveDisc').to.eq(15);
		});

		it('a discount can be selected', function() {
			var discounts = scope.discounts;
			scope.thisDisc= null;
			scope.selectDisc(discounts.normalDisc);

			expect(scope.thisDisc).to.eq(5);
		});

		it('the price is reduced by 5% with the normalDisc', function() {
			scope.sharedCart.push(fakeCloth);
			var price = (scope.sharedCart[0].price);
			var disc  = scope.selectDisc(scope.discounts.normalDisc);

			scope.applyDisc();

			expect(scope.applyDisc()).to.eq(price-((disc/100)*100));
		});
	});


