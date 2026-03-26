import express from 'express';

import { ProblemController } from '../../controllers/problem.controller';
import {  validateRequestBody } from '../../validators';
import { createProblemSchema, updateProblemSchema } from '../../validators/problem.validator';
import container from '../../config/container';

const problemRouter = express.Router();

const problemController = container.resolve(ProblemController);

problemRouter.post('/', validateRequestBody(createProblemSchema),problemController.createProblem );
problemRouter.get('/',problemController.getAllProblems );
problemRouter.get('/:id',problemController.getProblemById );
problemRouter.put('/:id', validateRequestBody(updateProblemSchema),problemController.updateProblem );
problemRouter.delete('/:id',problemController.deleteProblem );


problemRouter.get('/health', (req, res) => {
    res.status(200).send('OK');
});

export default problemRouter;