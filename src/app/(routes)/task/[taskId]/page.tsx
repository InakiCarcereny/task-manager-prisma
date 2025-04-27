import { getTasks } from '@/actions/task';
import { JSX } from 'react';

export default async function TaskPage({
  params,
}: {
  params: Promise<{ taskId: string }>;
}): Promise<JSX.Element> {
  const { taskId } = await params;

  const allTasks = await getTasks();

  const task = allTasks.find((task) => task.id === taskId);

  return <div>{task?.name}</div>;
}
