import { JSX } from 'react';
import { Task } from '@/components/Task';
import { getTasks } from '@/actions/task';

export async function TaskList(): Promise<JSX.Element> {
  const allTasks = await getTasks();

  return (
    <ul>
      {allTasks.map((task) => (
        <Task
          key={task.id}
          name={task.name}
          description={task.description}
          priority={task.priority}
        />
      ))}
    </ul>
  );
}
