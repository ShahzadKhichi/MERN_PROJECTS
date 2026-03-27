
import {container} from "tsyringe";

import { ISubmissionRepository, SubmissionRepository } from "../repository/submission.repository";
import { ISubmissionService, SubmissionService } from "../services/submission.service";
import { ISubmissionController, SubmissionController } from "../controllers/submission.controller";

container.register<ISubmissionRepository>(SubmissionRepository, { useClass: SubmissionRepository });
container.register<ISubmissionService>(SubmissionService, { useClass: SubmissionService });
container.register<ISubmissionController>(SubmissionController, { useClass: SubmissionController });

export default container;

