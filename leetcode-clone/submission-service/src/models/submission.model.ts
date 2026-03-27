import mongoose from "mongoose";

export interface ISubmission {
    // userId: string;
    problemId: string;
    code: string;
    language: string;
    status: string;
    createdAt: Date;
    runtime: number;
    memory: number;
    

}

const submissionSchema = new mongoose.Schema<ISubmission>({
//    userId: {
//         type: String,
//         required: true
//     },
    problemId: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    },
    runtime: {
        type: Number,
        required: true
    },
    memory: {
        type: Number,
        required: true
    }
});

const Submission = mongoose.model<ISubmission>('Submission', submissionSchema);

export default Submission;