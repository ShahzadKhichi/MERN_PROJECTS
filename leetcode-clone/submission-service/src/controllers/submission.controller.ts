import { NextFunction, Request, Response } from "express";
import { ISubmissionService, SubmissionService } from "../services/submission.service";

import status from "http-status";
import { inject, injectable } from "tsyringe";
import logger from "../config/logger.config";

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
            logger.info("Creating submission");
            const submission = await this.submissionService.createSubmission(req.body)
            logger.info("Submission created successfully");
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
            logger.info("Getting all submissions");
            const submissions = await this.submissionService.getAllSubmissions();
            logger.info("Submissions fetched successfully");
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
            logger.info("Getting submission by id");
            const submission = await this.submissionService.getSubmissionById(req.params.id);
            res.status(status.OK).json({
                success:true,
                message:"Submission fetched successfully",
                data:submission
            });
            logger.info("Submission fetched successfully");
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