/*global it,describe,browser,beforeEach,expect,by,element*/
'use strict';

var chai     = require('chai');
var promised = require('chai-as-promised');
chai.use(promised); 
var expect   = chai.expect;


describe('User Stories', function() {

	beforeEach(function(){browser.get('/');});

	var allCloth = element.all(by.repeater('product in products'));
	var chart    = element.all(by.repeater('cloth in sharedCart'));
	
	var clothName = element(by.repeater('product in products').row(0).column('product.name'));
	var clothCat = element(by.repeater('product in products').row(0).column('product.category'));
	var clothPrice = element(by.repeater('product in products').row(0).column('product.price'));
	var clothStock = element(by.repeater('product in products').row(0).column('product.stock'));
	
	var clotButton  = element(by.repeater('product in products').row(0));
	var addButton = clotButton.element(by.buttonText('Add Item'));
	var chartButton  = element(by.repeater('cloth in sharedCart').row(0));
	var removeButton = chartButton.element(by.buttonText('Remove Item')); 

	it('I can view the products and their category, price and their stock', function() {
		expect(allCloth.count()).to.eventually.eq(13);
		
		expect(clothName.getText()).to.eventually.eq('Almond Toe Court Shoes, Patent Black');	
		
		expect(clothCat.getText()).to.eventually.eq('Women’s Footwear');
		
		expect(clothPrice.getText()).to.eventually.eq('£ 99.00');

		expect(clothStock.getText()).to.eventually.eq('5');	
	});

	it('I can add a product to the shopping cart', function() {
		expect(addButton.isPresent()).to.eventually.be.true();
		addButton.click();
		expect(chart.count()).to.eventually.eq(1);
	});

	it('I can add another product to the shopping cart', function() {
		addButton.click();
		addButton.click();
		expect(chart.count()).to.eventually.eq(2);
	});

	it('I can remove an item form the shoppingChart', function() {
		addButton.click();
		expect(chart.count()).to.eventually.eq(1);
		removeButton.click();
		expect(chart.count()).to.eventually.eq(0);
	});

	it('I can see the price for my shoppingChart', function() {
		addButton.click();
		expect(element(by.css('.totalPrice')).getText()).to.eventually.eq('Price order £ 99.00');
	});

	it('I can a apply a voucher to my shoppingChart', function() {
		var discounts = element(by.css('section.discounts'));
		
		expect(discounts.isDisplayed()).to.eventually.be.false();
		addButton.click();
		expect(discounts.isDisplayed()).to.eventually.be.true();
	});

	it('I can see 5% off the price with the normal discount', function() {
		var discounts = element(by.buttonText('5% off!'));
		addButton.click();
		discounts.click();
		expect(element(by.css('.priceDisc')).getText()).to.eventually.eq('Price with discounts £ 94.05');
	});

	it('I can see 10% off the price if I spend more than 50£', function() {
		var discounts = element(by.buttonText('10% off!'));
		addButton.click();
		discounts.click();
		expect(element(by.css('.priceDisc')).getText()).to.eventually.eq('Price with discounts £ 89.10');
	});

	it('I can see 15% off the price if I spend more than 75£ and there is one Footwear item', function() {
		var discounts = element(by.buttonText('15% off!'));
		addButton.click();
		discounts.click();
		expect(element(by.css('.priceDisc')).getText()).to.eventually.eq('Price with discounts £ 84.15');
	});
});