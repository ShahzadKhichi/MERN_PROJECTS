import { z } from "zod";

export const createSubmissionSchema = z.object({
    // userId: z.string().min(1),
    problemId: z.string().min(1),
    code: z.string().min(1),
    language: z.string().min(1),
    status: z.string().min(1).optional(),
    createdAt: z.string().min(1).optional(),
    runtime: z.number().min(1).optional(),
    memory: z.number().min(1).optional(),
});

export const updateSubmissionSchema = z.object({
    // userId: z.string().min(1).optional(),
    problemId: z.string().min(1).optional(),
    code: z.string().min(1).optional(),
    language: z.string().min(1).optional(),
    status: z.string().min(1).optional(),
    createdAt: z.string().min(1).optional(),
    runtime: z.number().min(1).optional(),
    memory: z.number().min(1).optional(),
});
    
