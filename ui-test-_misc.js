const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('ROCOGazette_Misc', function () {

	const ROCOBulletinProject = uRandomElement(undefined, Math.random().toString());

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			ROCOBulletinProject,
		});
	});

	describe('ROCOGazette', function test_ROCOGazette () {

		it('classes OLSKDecorModule', function () {
			browser.assert.hasClass(ROCOGazette, 'OLSKDecorModule');
		});
		
	});

	describe('ROCOBulletin', function test_ROCOBulletin () {

		it('sets ROCOBulletinProject', function () {
			browser.assert.attribute('.ROCOBulletinProjectField', 'value', ROCOBulletinProject);
		});

	});

});
