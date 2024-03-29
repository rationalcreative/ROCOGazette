const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('ROCOGazette_Misc', function () {

	const ROCOBulletinProject = uRandomElement(undefined, Math.random().toString());
	const ROCOGazetteFeedback = Math.random().toString();

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			ROCOBulletinProject,
		});
	});

	describe('ROCOGazette', function test_ROCOGazette () {

		it('classes OLSKDecorModule', function () {
			return browser.assert.hasClass(ROCOGazette, 'OLSKDecorModule');
		});
		
	});

	describe('ROCOBulletin', function test_ROCOBulletin () {

		it('sets ROCOBulletinProject', function () {
			return browser.assert.attribute('.ROCOBulletinProjectField', 'value', ROCOBulletinProject || 'RP_X');
		});

	});

	context('ROCOGazetteFeedback', function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				ROCOGazetteFeedback,
			});
		});

		describe('ROCOGazetteBulletinFeedback', function test_ROCOGazetteBulletinFeedback () {

			it('classes OLSKCommonAlert', function () {
				return browser.assert.hasClass(ROCOGazetteBulletinFeedback, 'OLSKCommonAlert');
			});

			it('binds ROCOGazetteFeedback', function () {
				return browser.assert.text(ROCOGazetteBulletinFeedback, ROCOGazetteFeedback);
			});

		});

	});

});
