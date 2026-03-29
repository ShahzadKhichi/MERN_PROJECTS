import { z } from "zod";

export const createProblemSchema = z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    difficulty: z.enum(["easy","medium","hard"]),
    tags: z.array(z.string().min(1)).optional(),
    testCases: z.array(z.object({
        input: z.string().min(1),
        output: z.string().min(1),
    })).optional(),
});

export const updateProblemSchema = z.object({
    title: z.string().min(1).optional(),
    description: z.string().min(1).optional(),
    difficulty: z.enum(["easy","medium","hard"]).optional(),
    tags: z.array(z.string().min(1)).optional(),
    testCases: z.array(z.object({
        input: z.string().min(1),
        output: z.string().min(1),
    })).optional(),

});
    
