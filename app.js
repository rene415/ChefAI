'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res) => {
	// res.status(200).send('Hello, Akia');
	return res.json({
		speech: "something",
		displayText: "Hello, Akia",
		source: 'Chef AI'

	});
});

if (module === require.main) {
	const server = app.listen(process.env.PORT || 8081, () => {
		const port = server.address().port;
		console.log(`App listening on port ${port}`);
	})
}

module.exports = app;