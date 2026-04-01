import express from 'express';
import { pingHandler } from '../../controllers/ping.controller';
import {  validateRequestBody } from '../../validators';
import { pingSchema } from '../../validators/ping.validator';
import logger from '../../config/logger.config';

const pingRouter = express.Router();

pingRouter.get('/', validateRequestBody(pingSchema), pingHandler); // TODO: Resolve this TS compilation issue

pingRouter.get('/health', (req, res) => {
    logger.info("Health check")
    res.status(200).send('OK');
});

export default pingRouter;