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
			expect(scope.products).to.eq(service);
			expect(scope.products).to.have.length(13);
		});
	});
	
});



