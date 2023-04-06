const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	ROCOGazette: '.ROCOGazette',

	ROCOGazetteHeading: '.ROCOGazetteHeading',

	ROCOGazetteBulletinFeedback: '.ROCOGazetteBulletinFeedback',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('ROCOGazette_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	it('shows ROCOGazette', function () {
		return browser.assert.elements(ROCOGazette, 1);
	});

	it('shows ROCOGazetteHeading', function () {
		return browser.assert.elements(ROCOGazetteHeading, 1);
	});

	it('shows OLSKFollow', function () {
		return browser.assert.elements('.OLSKFollow', 1);
	});

	it('shows ROCOBulletin', function () {
		return browser.assert.elements('.ROCOBulletin', 1);
	});

	it('hides ROCOGazetteBulletinFeedback', function () {
		return browser.assert.elements(ROCOGazetteBulletinFeedback, 0);
	});

	context('ROCOGazetteFeedback', function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				ROCOGazetteFeedback: Math.random().toString(),
			});
		});

		it('shows ROCOGazetteBulletinFeedback', function () {
			return browser.assert.elements(ROCOGazetteBulletinFeedback, 1);
		});

	});

});
