import Problem from "../models/problem.model";
import { IProblem } from "../models/problem.model";


export const createProblem = async (problem: IProblem) => {
    try {
        const newProblem = new Problem(problem);
        await newProblem.save();
        return newProblem;
    } catch (error) {
        throw error;
    }
};

export const getAllProblems = async () => {
    try {
        const problems = await Problem.find();
        return problems;
    } catch (error) {
        throw error;
    }
};

export const getProblemById = async (id: string) => {
    try {
        const problem = await Problem.findById(id);
        return problem;
    } catch (error) {
        throw error;
    }
};

export const updateProblem = async (id: string, problem: IProblem) => {
    try {
        const updatedProblem = await Problem.findByIdAndUpdate(id, problem, { new: true });
        return updatedProblem;
    } catch (error) {
        throw error;
    }
};

export const deleteProblem = async (id: string) => {
    try {
        const deletedProblem = await Problem.findByIdAndDelete(id);
        return deletedProblem;
    } catch (error) {
        throw error;
    }
};