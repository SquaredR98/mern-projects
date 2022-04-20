import mongoose from 'mongoose';

import config from '../config/config';
import app from './express';

app.listen(config.port, (err) => {
	if (err) {
		console.log(err);
	}
	console.info('Server listening on port ' + config.port);
});

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri, {
	useNewUrlParser: true,
	// useCreateIndex: true,
	useUnifiedTopology: true,
});

mongoose.connection.on('error', (error) => {
	// console.log(error);
	throw new Error('Unable to connect to database: ' + config.mongoUri);
});
