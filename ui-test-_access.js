const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	ROCOGazette: '.ROCOGazette',

	ROCOGazetteHeading: '.ROCOGazetteHeading',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('ROCOGazette_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	it('shows ROCOGazette', function () {
		browser.assert.elements(ROCOGazette, 1);
	});

	it('shows ROCOGazetteHeading', function () {
		browser.assert.elements(ROCOGazetteHeading, 1);
	});

	it('shows OLSKFollow', function () {
		browser.assert.elements('.OLSKFollow', 1);
	});

	it('shows ROCOBulletin', function () {
		browser.assert.elements('.ROCOBulletin', 1);
	});

});
