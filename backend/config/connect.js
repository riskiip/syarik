const mongoose = require('mongoose');
require('dotenv/config');
mongoose
  .connect(process.env.DB_CONNECTION)
	.then(() => {
		console.log('connected');
	})
	.catch((err) => {
		console.log(err);
	});

module.exports = mongoose;
