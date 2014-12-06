/*global it,expect,describe,beforeEach,inject*/
'use strict';

describe('App controllers', function() {

	beforeEach(module('shopApp'));

	describe('ClothCtrl', function() {
		
		var scope, ctrl,service;
		
		beforeEach(inject(function($rootScope,$controller,ClothService){

			scope = $rootScope.$new();
			ctrl  = $controller('ClothCtrl', {$scope: scope});
			service = ClothService;

		}));

		it('is defined', function() {
			expect(ctrl).not.to.be.undefined;
		});

		it('contains all the cloth', function() {
			expect(scope.products).to.eq(service.cloth);
			expect(scope.products).to.have.length(13);
		});

		it('has sharedCart with no items', function() {
			expect(scope.sharedCart).to.eq(service.sharedCart);
			expect(scope.sharedCart).to.have.length(0);	
		});

		it('can add a cloth to the sharedCart', function() {
			scope.addItem(0);
			expect(scope.sharedCart).to.have.length(1);
		});
	});

	describe('CartCtrl', function() {
		
		var scope, ctrl, service;
		
		beforeEach(inject(function($rootScope,$controller,ClothService){

			scope = $rootScope.$new();
			ctrl  = $controller('CartCtrl', {$scope: scope});
			service = ClothService;
		}));

		it('is defined', function() {
			expect(ctrl).not.to.be.undefined;
		});

		it('has sharedCart with no items', function() {
			expect(scope.sharedCart).to.eq(service.sharedCart);
			expect(scope.sharedCart).to.have.length(0);	
		});
	});
});





