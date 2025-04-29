import { deleteTask } from '@/actions/task';
import { Pencil } from '@/icons/Pencil';
import { Trash } from '@/icons/Trash';
import { Task, TaskId } from '@/types/task';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export const TASK_OPTIONS = [
  {
    id: 1,
    icon: Pencil({}),
    bg: 'bg-red-100',
    text: 'text-red-400',
    onClick: (taskId: TaskId, router: AppRouterInstance): void =>
      router.push(`/task/${taskId}`),
  },
  {
    id: 2,
    icon: Trash({}),
    bg: 'bg-zinc-100',
    text: 'text-zinc-400',
    onClick: (taskId: TaskId): Promise<Task> => deleteTask(taskId),
  },
] as const;
