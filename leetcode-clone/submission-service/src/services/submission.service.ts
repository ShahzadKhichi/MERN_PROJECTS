import { inject, injectable } from "tsyringe";
import { ISubmission } from "../models/submission.model";
import { ISubmissionRepository, SubmissionRepository } from "../repository/submission.repository";

export interface ISubmissionService{
    createSubmission(submission: ISubmission): Promise<ISubmission>;
    getAllSubmissions(): Promise<ISubmission[]>;
    getSubmissionById(id: string): Promise<ISubmission|null>;
    updateSubmission(id: string, submission: ISubmission): Promise<ISubmission|null>;
    deleteSubmission(id: string): Promise<ISubmission|null>;
}

@injectable()
export class SubmissionService implements ISubmissionService{
    declare submissionRepository:ISubmissionRepository;
    constructor(
        @inject(SubmissionRepository)
        submissionRepository:SubmissionRepository
    ){
        this.submissionRepository = submissionRepository;
    }

    async createSubmission(submission: ISubmission): Promise<ISubmission> {
        try {
            const newSubmission = await this.submissionRepository.createSubmission(submission);
            return newSubmission;
        } catch (error) {
            throw error;
        }
    }

    async getAllSubmissions(): Promise<ISubmission[]> {
        try {
            const submissions = await this.submissionRepository.getAllSubmissions();
            return submissions;
        } catch (error) {
            throw error;
        }
    }

    async getSubmissionById(id: string): Promise<ISubmission|null> {
        try {
            const submission = await this.submissionRepository.getSubmissionById(id);
            return submission;
        } catch (error) {
            throw error;
        }
    }

    async updateSubmission(id: string, submission: ISubmission): Promise<ISubmission|null> {
        try {
            const updatedSubmission = await this.submissionRepository.updateSubmission(id, submission);
            return updatedSubmission;
        } catch (error) {
            throw error;
        }
    }

    async deleteSubmission(id: string): Promise<ISubmission|null> {
        try {
            const deletedSubmission = await this.submissionRepository.deleteSubmission(id);
            return deletedSubmission;
        } catch (error) {
            throw error;
        }
    }
}
    
