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
			expect(element(by.css('.title')).getText()).to.eventually.eq('ByverduShop');
		});

		it('should have a section to display the cloth', function() {
			expect(element(by.css('section.allCloth')).isPresent()).to.eventually.be.true;
		});

		it('should have a section to display the chart', function() {
			expect(element(by.css('section.shoppingChart')).isPresent()).to.eventually.be.true;

		});

		it('should have a section to display the discounts', function() {
			expect(element(by.css('section.discounts')).isPresent()).to.eventually.be.true;
		});
	});

});






















