import { NextFunction, Request, Response } from "express";
import { ISubmissionService, SubmissionService } from "../services/submission.service";

import status from "http-status";
import { inject, injectable } from "tsyringe";

export interface ISubmissionController {
    createSubmission(req:Request,res:Response,next:NextFunction):Promise<void>;
    getAllSubmissions(req:Request,res:Response,next:NextFunction): Promise<void>;
    getSubmissionById(req:Request,res:Response,next:NextFunction): Promise<void>;
    updateSubmission(req:Request,res:Response,next:NextFunction): Promise<void>;
    deleteSubmission(req:Request,res:Response,next:NextFunction): Promise<void>;

}

@injectable()
export class SubmissionController implements ISubmissionController{
    declare submissionService:ISubmissionService;

    constructor(
        @inject(SubmissionService)
        submissionService:SubmissionService
    ){
        this.submissionService = submissionService;
        this.createSubmission = this.createSubmission.bind(this);
        this.getAllSubmissions = this.getAllSubmissions.bind(this);
        this.getSubmissionById = this.getSubmissionById.bind(this);
        this.updateSubmission = this.updateSubmission.bind(this);
        this.deleteSubmission = this.deleteSubmission.bind(this);
    }

    async createSubmission(req:Request,res:Response,next:NextFunction) {
        try {
            const submission = await this.submissionService.createSubmission(req.body)
             res.status(status.CREATED).json({
                success:true,
                message:"Submission created successfully",
                data:submission
            });
        } catch (error) {
            next(error);
        }
    }

    async getAllSubmissions(req:Request,res:Response,next:NextFunction) {
        try {
            const submissions = await this.submissionService.getAllSubmissions();
            res.status(status.OK).json({
                success:true,
                message:"Submissions fetched successfully",
                data:submissions
            });
        } catch (error) {
            next(error);
        }
    }

    async getSubmissionById(req:Request,res:Response,next:NextFunction) {
        try {
            const submission = await this.submissionService.getSubmissionById(req.params.id);

            res.status(status.OK).json({
                success:true,
                message:"Submission fetched successfully",
                data:submission
            });
        } catch (error) {
            next(error);
        }
    }

    async updateSubmission(req:Request,res:Response,next:NextFunction) {
        try {
            const updatedSubmission = await this.submissionService.updateSubmission(req.params.id,req.body);
            res.status(status.OK).json({
                success:true,
                message:"Submission updated successfully",
                data:updatedSubmission
            });
        } catch (error) {
            next(error);
        }
    }

    async deleteSubmission(req:Request,res:Response,next:NextFunction) {
        try {
            const deletedSubmission = await this.submissionService.deleteSubmission(req.params.id);
            res.status(status.OK).json({
                success:true,
                message:"Submission deleted successfully",
                data:deletedSubmission
            });
        } catch (error) {
            next(error);
        }
    }
    
}