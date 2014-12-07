/*global it,describe,browser,beforeEach,expect*/
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

	});


});