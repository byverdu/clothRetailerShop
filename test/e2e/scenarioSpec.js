/*global it,describe,browser,beforeEach,expect,by,element*/
'use strict';

var chai     = require('chai');
var promised = require('chai-as-promised');
chai.use(promised); 
var expect   = chai.expect;

describe('shopApp',function(){

	beforeEach(function(){browser.get('/');});

	describe('Default layout', function() {

		it('should have a title in the browser tab', function() {
			expect(browser.getTitle()).to.eventually.eq('ByverduShop');
		});

		it('should be a responsive website', function() {
			expect(element(by.css('.container-fluid')).isPresent()).to.eventually.be.true;
		});

		it('should have a welcome message', function() {
			expect(element(by.css('.title')).getText()).to.eventually.eq('Welcome to ByverduShop');
		});

		it('should have a section to display the cloth', function() {
			expect(element(by.css('section.allCloth')).isPresent()).to.eventually.be.true;
		});

		it('should have a section to display the chart', function() {
			var chart = element(by.css('section.shoppingChart'));
			expect(chart.isPresent()).to.eventually.be.true;
			expect(chart.isDisplayed()).to.eventually.be.false;
		});

		it('should have a section to display the discounts', function() {
			expect(element(by.css('section.discounts')).isPresent()).to.eventually.be.true;
		});
	});

	describe('User Stories', function() {

		var allCloth = element.all(by.repeater('product in products'));
		var chart    = element.all(by.repeater('cloth in sharedCart'));
		var clothName = element(by.repeater('product in products').row(0).column('product.name'));
		var clothCat = element(by.repeater('product in products').row(0).column('product.category'));
		var clothPrice = element(by.repeater('product in products').row(0).column('product.price'));
		var clothStock = element(by.repeater('product in products').row(0).column('product.stock'));
		var addButton  = element(by.buttonText('Add Item')); 

		it('I can view the products and their category, price and their stock', function() {
			expect(allCloth.count()).to.eventually.eq(13);
			
			expect(clothName.getText()).to.eventually.eq('Almond Toe Court Shoes, Patent Black');	
			
			expect(clothCat.getText()).to.eventually.eq('Women’s Footwear');
			
			expect(clothPrice.getText()).to.eventually.eq('£ 99.00');

			expect(clothStock.getText()).to.eventually.eq('5');	
		});

		it('I can add a product to the shopping cart', function() {
			expect(addButton.isPresent()).to.eventually.be.true;
			addButton.click();
			expect(chart.count()).to.eventually.eq(1);
		});

		it('I can add another product to the shopping cart', function() {
			addButton.click();
			addButton.click();
			expect(chart.count()).to.eventually.eq(2);
		});
	});
});






















