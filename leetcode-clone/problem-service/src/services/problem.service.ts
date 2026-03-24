import { IProblem } from "../models/problem.model";
import { IProblemRepository } from "../repository/problem.repository";

export interface IProblemService{
    createProblem(problem: IProblem): Promise<IProblem>;
    getAllProblems(): Promise<IProblem[]>;
    getProblemById(id: string): Promise<IProblem|null>;
    updateProblem(id: string, problem: IProblem): Promise<IProblem|null>;
    deleteProblem(id: string): Promise<IProblem|null>;
}

export class ProblemService implements IProblemService{
    declare problemRepositroy:IProblemRepository;

    constructor(problemRepositroy:IProblemRepository){
        this.problemRepositroy = problemRepositroy;
    }

    async createProblem(problem: IProblem): Promise<IProblem> {
        try {
            const newProblem = await this.problemRepositroy.createProblem(problem);
            return newProblem;
        } catch (error) {
            throw error;
        }
    }

    async getAllProblems(): Promise<IProblem[]> {
        try {
            const problems = await this.problemRepositroy.getAllProblems();
            return problems;
        } catch (error) {
            throw error;
        }
    }

    async getProblemById(id: string): Promise<IProblem|null> {
        try {
            const problem = await this.problemRepositroy.getProblemById(id);
            return problem;
        } catch (error) {
            throw error;
        }
    }

    async updateProblem(id: string, problem: IProblem): Promise<IProblem|null> {
        try {
            const updatedProblem = await this.problemRepositroy.updateProblem(id, problem);
            return updatedProblem;
        } catch (error) {
            throw error;
        }
    }

    async deleteProblem(id: string): Promise<IProblem|null> {
        try {
            const deletedProblem = await this.problemRepositroy.deleteProblem(id);
            return deletedProblem;
        } catch (error) {
            throw error;
        }
    }
}
    
