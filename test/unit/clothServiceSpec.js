'use strict';
/*global it,expect,describe,beforeEach,inject*/

describe('ClothService', function() {

	var fakeCloth = {
		name: 'Almond Toe Court Shoes, Patent Black',
		category: 'Women’s Footwear',
		price: '99.0£',
		stock: 5
	};
	
	var service;

	beforeEach(module('shopApp'));

	beforeEach(inject(function(ClothService){
		service = ClothService;
	}));

	it('should be defined', function() {
		expect(service).not.to.be.undefined;
		expect(service).to.be.an('array');
	});

	it('should contain all the cloth stock', function() {
		expect(service).to.contain(fakeCloth).and.have.length(13);
	});

	it('each cloth has a property name', function() {
		expect(service[0]).to.have.property('name').to.eq('Almond Toe Court Shoes, Patent Black');
	});

	it('each cloth has a property category', function() {
		expect(service[0]).to.have.property('category').to.eq('Women’s Footwear');
	});

	it('each cloth has a property price', function() {
		expect(service[0]).to.have.property('price').to.eq('99.0£');
	});

	it('each cloth has a property stock', function() {
		expect(service[0]).to.have.property('stock').to.eq(5);
	});
});