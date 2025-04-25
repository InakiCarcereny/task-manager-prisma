import { z } from 'zod';

export const createTaskSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().min(1, 'Description is required'),
  priority: z.string().min(1, 'Priority is required'),
});

export const updateTaskSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  priority: z.string().optional(),
});

export type CreateTask = z.infer<typeof createTaskSchema>;

export type UpdateTask = z.infer<typeof updateTaskSchema>;
