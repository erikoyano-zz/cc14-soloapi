const express = require('express');
const app = express();

const server = (setupServer = () => {
	app.use(express.json());
	return app;
});

module.exports = { setupServer };
