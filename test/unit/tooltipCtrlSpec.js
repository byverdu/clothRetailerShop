/*global it,expect,describe,beforeEach,inject*/
'use strict';

describe('TooltipCtrl', function() {

	var scope ,ctrl;

	beforeEach(module('shopApp'));
	
	beforeEach(inject(function($rootScope,$controller){

		scope = $rootScope.$new();
		ctrl  = $controller('TooltipCtrl', {$scope: scope});

	}));

	it('is defined', function() {
		expect(ctrl).not.to.be.undefined();
	});

	it('has a property for the 5% discount', function() {
		expect(scope).to.have.property('normalTooltip').that.is.an('string');
	});

	it('has a property for the 10% discount', function() {
		expect(scope).to.have.property('fiftyTooltip').that.is.an('string');
	});

	it('has a property for the 15% discount', function() {
		expect(scope).to.have.property('seventyTooltip').that.is.an('string');
	});
});


