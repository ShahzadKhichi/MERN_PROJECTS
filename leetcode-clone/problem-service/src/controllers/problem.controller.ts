import { NextFunction, Request, Response } from "express";
import { IProblem } from "../models/problem.model";
import { IProblemService } from "../services/problem.service";

import status from "http-status";

export interface IProblemController {
    createProblem(req:Request,res:Response,next:NextFunction):Promise<void>;
    getAllProblems(req:Request,res:Response,next:NextFunction): Promise<void>;
    getProblemById(req:Request,res:Response,next:NextFunction): Promise<void>;
    updateProblem(req:Request,res:Response,next:NextFunction): Promise<void>;
    deleteProblem(req:Request,res:Response,next:NextFunction): Promise<void>;

}

export class ProblemController implements IProblemController{
    declare problemService:IProblemService;

    constructor(problemService:IProblemService){
        this.problemService = problemService;
    }

    async createProblem(req:Request,res:Response,next:NextFunction) {
        try {
            const problem = await this.problemService.createProblem(req.body)
             res.status(status.CREATED).json({
                success:true,
                message:"Problem created successfully",
                data:problem
            });
        } catch (error) {
            next(error);
             res.status(status.INTERNAL_SERVER_ERROR).json({
                success:false,
                message:"Failed to create problem",
                data:null
            });
        }
    }

    async getAllProblems(req:Request,res:Response,next:NextFunction) {
        try {
            const problems = await this.problemService.getAllProblems();
            res.status(status.OK).json({
                success:true,
                message:"Problems fetched successfully",
                data:problems
            });
        } catch (error) {
            next(error);
            res.status(status.INTERNAL_SERVER_ERROR).json({
                success:false,
                message:"Failed to fetch problems",
                data:null
            });
        }
    }

    async getProblemById(req:Request,res:Response,next:NextFunction) {
        try {
            const problem = await this.problemService.getProblemById(req.params.id);
            res.status(status.OK).json({
                success:true,
                message:"Problem fetched successfully",
                data:problem
            });
        } catch (error) {
            next(error);
            res.status(status.INTERNAL_SERVER_ERROR).json({
                success:false,
                message:"Failed to fetch problem",
                data:null
            });
        }
    }

    async updateProblem(req:Request,res:Response,next:NextFunction) {
        try {
            const updatedProblem = await this.problemService.updateProblem(req.params.id,req.body);
            res.status(status.OK).json({
                success:true,
                message:"Problem updated successfully",
                data:updatedProblem
            });
        } catch (error) {
            next(error);
            res.status(status.INTERNAL_SERVER_ERROR).json({
                success:false,
                message:"Failed to update problem",
                data:null
            });
        }
    }

    async deleteProblem(req:Request,res:Response,next:NextFunction) {
        try {
            const deletedProblem = await this.problemService.deleteProblem(req.params.id);
            res.status(status.OK).json({
                success:true,
                message:"Problem deleted successfully",
                data:deletedProblem
            });
        } catch (error) {
            next(error);
            res.status(status.INTERNAL_SERVER_ERROR).json({
                success:false,
                message:"Failed to delete problem",
                data:null
            });
        }
    }
    
}