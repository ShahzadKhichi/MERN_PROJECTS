import { NextFunction, Request, Response } from "express";
import { IProblemService, ProblemService } from "../services/problem.service";

import status from "http-status";
import { inject, injectable } from "tsyringe";

export interface IProblemController {
    createProblem(req:Request,res:Response,next:NextFunction):Promise<void>;
    getAllProblems(req:Request,res:Response,next:NextFunction): Promise<void>;
    getProblemById(req:Request,res:Response,next:NextFunction): Promise<void>;
    updateProblem(req:Request,res:Response,next:NextFunction): Promise<void>;
    deleteProblem(req:Request,res:Response,next:NextFunction): Promise<void>;

}

@injectable()
export class ProblemController implements IProblemController{
    declare problemService:IProblemService;

    constructor(
        @inject(ProblemService)
        problemService:ProblemService
    ){
        this.problemService = problemService;
        this.createProblem = this.createProblem.bind(this);
        this.getAllProblems = this.getAllProblems.bind(this);
        this.getProblemById = this.getProblemById.bind(this);
        this.updateProblem = this.updateProblem.bind(this);
        this.deleteProblem = this.deleteProblem.bind(this);
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
        }
    }
    
}