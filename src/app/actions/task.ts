'use server';

import { prisma } from '@/lib/prisma';
import { Task, TaskId } from '@/types/task';
import { CreateTask, UpdateTask } from '@/schemas/task';
import { revalidatePath } from 'next/cache';

export async function getTasks(): Promise<Task[]> {
  const tasks = await prisma.task.findMany();

  return tasks;
}

export async function createTask(task: CreateTask): Promise<Task> {
  const newTask = await prisma.task.create({
    data: task,
  });

  revalidatePath('/');

  return newTask;
}

export async function updateTask(id: TaskId, task: UpdateTask): Promise<Task> {
  const updatedTask = await prisma.task.update({
    data: task,
    where: {
      id,
    },
  });

  revalidatePath('/');

  return updatedTask;
}

export async function deleteTask(id: TaskId): Promise<Task> {
  const deletedTask = await prisma.task.delete({
    where: {
      id,
    },
  });

  revalidatePath('/');

  return deletedTask;
}
