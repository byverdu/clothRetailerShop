exports.config = {

	framework:       'mocha',
	baseUrl: 'http://localhost:3000',

	specs: ['./e2e/*.js'],
	capabilities: {
    'browserName': 'chrome'
  }           

};
