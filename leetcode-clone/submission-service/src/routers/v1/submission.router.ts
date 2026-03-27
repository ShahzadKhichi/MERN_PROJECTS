import express from 'express';

import { SubmissionController } from '../../controllers/submission.controller';
import {  validateRequestBody } from '../../validators';
import { createSubmissionSchema, updateSubmissionSchema } from '../../validators/submission.validator';
import container from '../../config/container';

const submissionRouter = express.Router();

const submissionController = container.resolve(SubmissionController);

submissionRouter.post('/', validateRequestBody(createSubmissionSchema),submissionController.createSubmission ); 

submissionRouter.get('/',submissionController.getAllSubmissions);

submissionRouter.get('/:id',submissionController.getSubmissionById);

submissionRouter.put('/:id',validateRequestBody(updateSubmissionSchema),submissionController.updateSubmission);





submissionRouter.get('/health', (req, res) => {
    res.status(200).send('OK');
});

export default submissionRouter;