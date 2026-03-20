import mongoose from "mongoose";


export interface IProblem {
    title: string;
    description: string;
    difficulty: string;
    tags: string[];
    testCases: ITestCase[];
    
}
export interface ITestCase {
    input: string;
    output: string;
}

const testCaseSchema = new mongoose.Schema<ITestCase>({
    input: {
        type: String,
        required: true
    },
    output: {
        type: String,
        required: true
    }
});

const problemSchema = new mongoose.Schema<IProblem>({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        enum: ['easy', 'medium', 'hard'],
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    testCases: {
        type: [testCaseSchema],
        required: true
    }
});

const Problem = mongoose.model<IProblem>('Problem', problemSchema);

export default Problem;