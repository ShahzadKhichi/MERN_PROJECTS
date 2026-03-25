import express from 'express';

import { ProblemController } from '../../controllers/problem.controller';
import {  validateRequestBody } from '../../validators';
import { createProblemSchema } from '../../validators/problem.validator';
import container from '../../config/container';

const problemRouter = express.Router();

const problemController = container.resolve(ProblemController);

problemRouter.post('/', validateRequestBody(createProblemSchema),problemController.createProblem ); // TODO: Resolve this TS 

problemRouter.get('/health', (req, res) => {
    res.status(200).send('OK');
});

export default problemRouter;