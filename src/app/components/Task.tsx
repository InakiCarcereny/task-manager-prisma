import { getPriorityStyles } from '@/utils/getPriorityStyles';
import { JSX } from 'react';
import { TaskOptions } from './TaskOptions';

interface TaskProps {
  name: string;
  description: string;
  priority: string;
  id: string;
  createdAt: Date;
}

export function Task({
  name,
  description,
  priority,
  id,
  createdAt,
}: TaskProps): JSX.Element {
  return (
    <li className='relative flex h-[250px] w-[400px] flex-col justify-between rounded-md bg-white px-4 py-4 shadow-md'>
      <div className='flex flex-col gap-4'>
        <header className='flex w-full items-center justify-between'>
          <div
            className={`flex w-fit rounded-full px-2 py-1 text-xs font-semibold ${getPriorityStyles(priority)}`}
          >
            {priority}
          </div>

          <TaskOptions id={id} />
        </header>

        <h2 className='text-lg font-semibold text-black dark:text-white'>
          {name}
        </h2>

        <p className='text-sm text-zinc-600'>{description}</p>
      </div>

      <div className='mb-6 w-full border border-zinc-200'></div>

      <div className='absolute right-2 bottom-2'>
        <span className='text-xs text-zinc-600'>
          {createdAt.toLocaleString()}
        </span>
      </div>
    </li>
  );
}
