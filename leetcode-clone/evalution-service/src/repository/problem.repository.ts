
import Problem from "../models/problem.model";
import { IProblem } from "../models/problem.model";
import logger from "../config/logger.config";
import { injectable } from "tsyringe";


export interface IProblemRepository {
    createProblem(problem: IProblem): Promise<IProblem>;
    getAllProblems(): Promise<IProblem[]>;
    getProblemById(id: string): Promise<IProblem|null>;
    updateProblem(id: string, problem: IProblem): Promise<IProblem|null>;
    deleteProblem(id: string): Promise<IProblem|null>;
}
@injectable()
export class ProblemRepository implements IProblemRepository {
    constructor()
    {
        logger.info("ProblemRepository initialized");
    }
    async createProblem(problem: IProblem) {
        try {
            const newProblem = new Problem(problem);
            await newProblem.save();
            return newProblem;
        } catch (error) {
            throw error;
        }
    }

    async getAllProblems() {
        try {
            const problems = await Problem.find();
            return problems;
        } catch (error) {
            throw error;
        }
    }

    async getProblemById(id: string) {
        try {
            const problem = await Problem.findById(id);
            return problem;
        } catch (error) {
            throw error;
        }
    }

    async updateProblem(id: string, problem: IProblem) {
        try {
            const updatedProblem = await Problem.findByIdAndUpdate(id, problem, { new: true });
            return updatedProblem;
        } catch (error) {
            throw error;
        }
    }

    async deleteProblem(id: string) {
        try {
            const deletedProblem = await Problem.findByIdAndDelete(id);
            return deletedProblem;
        } catch (error) {
            throw error;
        }
    }
}

