
import Submission, { ISubmission } from "../models/submission.model";
import logger from "../config/logger.config";
import { injectable } from "tsyringe";


export interface ISubmissionRepository {
    createSubmission(submission: ISubmission): Promise<ISubmission>;
    getAllSubmissions(): Promise<ISubmission[]>;
    getSubmissionById(id: string): Promise<ISubmission|null>;
    updateSubmission(id: string, submission: ISubmission): Promise<ISubmission|null>;
    deleteSubmission(id: string): Promise<ISubmission|null>;
}
@injectable()
export class SubmissionRepository implements ISubmissionRepository {
    constructor()
    {
        logger.info("SubmissionRepository initialized");
    }
    async createSubmission(submission: ISubmission) {
        try {
            const newSubmission = new Submission(submission);
            await newSubmission.save();
            logger.info("Submission created successfully");
            return newSubmission;
        } catch (error) {
            throw error;
        }
    }

    async getAllSubmissions() {
        try {
            const submissions = await Submission.find();
            logger.info("All submissions fetched successfully");
            return submissions;
        } catch (error) {
            throw error;
        }
    }

    async getSubmissionById(id: string) {
        try {
            const submission = await Submission.findById(id);
            logger.info(`Submission with id ${id} fetched successfully`);
            return submission;
        } catch (error) {
            throw error;
        }
    }

    async updateSubmission(id: string, submission: ISubmission) {
        try {
            const updatedSubmission = await Submission.findByIdAndUpdate(id, submission, { new: true });
            logger.info(`Submission with id ${id} updated successfully`);
            return updatedSubmission;
        } catch (error) {
            throw error;
        }
    }

    async deleteSubmission(id: string) {
        try {
            const deletedSubmission = await Submission.findByIdAndDelete(id);
            logger.info(`Submission with id ${id} deleted successfully`);
            return deletedSubmission;
        } catch (error) {
            throw error;
        }
    }
}

