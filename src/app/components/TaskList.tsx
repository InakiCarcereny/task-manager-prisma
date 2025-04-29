import { JSX } from 'react';
import { Task } from '@/components/Task';
import { getTasks } from '@/actions/task';

export async function TaskList(): Promise<JSX.Element> {
  const allTasks = await getTasks();

  return (
    <ul className='grid w-full grid-cols-3 gap-x-2 gap-y-4'>
      {allTasks.length > 0 ? (
        <>
          {allTasks.map((task) => (
            <Task
              key={task.id}
              name={task.name}
              description={task.description}
              priority={task.priority}
              id={task.id}
              createdAt={task.createdAt}
            />
          ))}
        </>
      ) : (
        <div className='text-xl text-black'>No tasks yet.</div>
      )}
    </ul>
  );
}
