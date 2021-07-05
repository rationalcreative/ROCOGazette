const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('ROCOGazette_Misc', function () {

	const ROCOBulletinProject = uRandomElement(undefined, Math.random().toString());

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			ROCOBulletinProject,
		});
	});

	describe('ROCOBulletin', function test_ROCOBulletin () {

		it('sets ROCOBulletinProject', function () {
			browser.assert.attribute('.ROCOBulletinProjectField', 'value', ROCOBulletinProject);
		});

	});

});
