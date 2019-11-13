import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';

import config from './config';
import adminController from '../app/controller/admin';
import database from '../app/model/database';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

database.init(config.database);

express()
	.use('/admin', adminController)
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
