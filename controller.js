const mod = {

	OLSKControllerRoutes  () {
		return [{
			OLSKRoutePath: '/',
			OLSKRouteMethod: 'get',
			OLSKRouteSignature: 'ROCOGazetteStubRoute',
			OLSKRouteFunction (req, res, next) {
				return res.OLSKExpressLayoutRender(require('path').join(__dirname, 'main'), Object.assign({
					ROCOBulletinProject: Math.random().toString(),
					_OLSKModulesDirPrefix: '',
				}, Object.fromEntries(Array.from((new URLSearchParams(req.query)).entries()).filter(function ([key, value]) {
					return value !== 'undefined';
				}))));
			},
			OLSKRouteLanguageCodes: ['en', 'fr', 'es', 'pt'],
		}];
	},

};

Object.assign(exports, mod)
