'use strict';
/*global it,expect,describe,beforeEach,inject*/

describe('ClothService', function() {

	var fakeCloth = {
		name: 'Almond Toe Court Shoes, Patent Black',
		category: 'Women’s Footwear',
		price: '99.00',
		stock: 5
	};
	
	var service;

	beforeEach(module('shopApp'));

	beforeEach(inject(function(ClothService){
		service = ClothService;
	}));

	it('should be defined', function() {
		expect(service).not.to.be.undefined;
		expect(service).to.be.an('object');
	});

	it('should have a cloth property', function() {
		expect(service).to.have.property('cloth').that.is.an('array');
	});

	it('that should contain all the cloth stock', function() {
		expect(service.cloth).to.contain(fakeCloth).and.have.length(13);
	});

	it('and each cloth has a property name', function() {
		expect(service.cloth[0]).to.have.property('name').to.eq('Almond Toe Court Shoes, Patent Black');
	});

	it('and each cloth has a property category', function(){
		expect(service.cloth[0]).to.have.property('category').to.eq('Women’s Footwear');
	});

	it('and each cloth has a property price', function() {
		expect(service.cloth[0]).to.have.property('price').to.eq('99.00');
	});

	it('and each cloth has a property stock', function() {
		expect(service.cloth[0]).to.have.property('stock').to.eq(5);
	});

	it('should have a property that contains the selected products', function() {
		expect(service).to.have.property('sharedCart').that.is.an('array');
	});
});