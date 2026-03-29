
import {container} from "tsyringe";

import { IProblemRepository, ProblemRepository } from "../repository/problem.repository";
import { IProblemService, ProblemService } from "../services/problem.service";
import { IProblemController, ProblemController } from "../controllers/problem.controller";

container.register<IProblemRepository>(ProblemRepository, { useClass: ProblemRepository });
container.register<IProblemService>(ProblemService, { useClass: ProblemService });
container.register<IProblemController>(ProblemController, { useClass: ProblemController });

export default container;

