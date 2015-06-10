'use strict';

var fs = require('fs');

module.exports = {
	session_secret: process.env.SESSION_SECRET || 'This is our session secret and my gosh aint it great?',
	domain: process.env.DOMAIN || 'localhost',
	http: {
		port: process.env.HTTP_PORT || 1111
	},
	https: {
		port: process.env.HTTPS_PORT || 2222,
		private_key: fs.readFileSync(__dirname + '/ssl/localhost-key.pem', 'utf-8'),
		public_cert: fs.readFileSync(__dirname + '/ssl/localhost-cert.pem', 'utf-8')
	}
};
