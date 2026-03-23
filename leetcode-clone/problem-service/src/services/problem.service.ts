import { IProblem } from "../models/problem.model";
import ProblemRepository from "../repository/problem.repository";

class ProblemService {
    async createProblem(problem: IProblem) {
        try {
            const newProblem = await ProblemRepository.createProblem(problem);
            return newProblem;
        } catch (error) {
            throw error;
        }
    }

    async getAllProblems() {
        try {
            const problems = await ProblemRepository.getAllProblems();
            return problems;
        } catch (error) {
            throw error;
        }
    }

    async getProblemById(id: string) {
        try {
            const problem = await ProblemRepository.getProblemById(id);
            return problem;
        } catch (error) {
            throw error;
        }
    }

    async updateProblem(id: string, problem: IProblem) {
        try {
            const updatedProblem = await ProblemRepository.updateProblem(id, problem);
            return updatedProblem;
        } catch (error) {
            throw error;
        }
    }

    async deleteProblem(id: string) {
        try {
            const deletedProblem = await ProblemRepository.deleteProblem(id);
            return deletedProblem;
        } catch (error) {
            throw error;
        }
    }
}

export default new ProblemService();