import { getTasks } from '@/actions/task';
import { JSX } from 'react';
import { EditTask } from '@/components/EditTask';
import { Task } from '@/components/Task';

export default async function TaskPage({
  params,
}: {
  params: Promise<{ taskId: string }>;
}): Promise<JSX.Element> {
  const { taskId } = await params;

  const allTasks = await getTasks();

  const task = allTasks.find((task) => task.id === taskId);

  return (
    <div className='flex h-screen w-full items-center justify-center'>
      <div className='flex items-center gap-10'>
        <div className='flex h-[500px] w-[400px] flex-col gap-8 rounded-md bg-white p-4'>
          <header>
            <h2 className='text-xl font-semibold text-black'>Edit Task</h2>
          </header>

          <EditTask
            key={task?.id}
            id={task?.id as string}
            name={task?.name as string}
            descritpion={task?.description as string}
            priority={task?.priority as string}
          />
        </div>

        <div className='flex h-[750px] w-[400px] flex-col gap-4'>
          <header>
            <h2 className='text-xl font-semibold text-black'>Other Tasks</h2>
          </header>

          <ul className='flex flex-col gap-4'>
            {allTasks.slice(0, 3).map((task) => (
              <Task
                key={task.id}
                name={task.name}
                description={task.description}
                priority={task.priority}
                id={task.id}
                createdAt={task.createdAt}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
