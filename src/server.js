const express = require('express');
const app = express();

const server = (setupServer = () => {
	app.use(express.json());
	app.use(express.static('public'));

	return app;
});

module.exports = { setupServer };
