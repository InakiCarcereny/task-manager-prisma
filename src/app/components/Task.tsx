import { getPriorityStyles } from '@/utils/getPriorityStyles';
import { JSX } from 'react';

interface TaskProps {
  name: string;
  description: string;
  priority: string;
  createdAt: Date;
}

export function Task({
  name,
  description,
  priority,
  createdAt,
}: TaskProps): JSX.Element {
  return (
    <li className='relative flex h-[250px] w-[400px] flex-col gap-4 rounded-md bg-white px-4 py-4 shadow-md'>
      <header className='flex w-full items-center justify-between'>
        <div
          className={`flex w-fit rounded-full px-2 py-1 text-xs font-semibold ${getPriorityStyles(priority)}`}
        >
          {priority}
        </div>

        <div>...</div>
      </header>

      <h2 className='text-lg font-semibold text-black'>{name}</h2>

      <p className='text-sm text-zinc-600'>{description}</p>

      <div className='absolute right-2 bottom-2'>
        <span className='text-xs text-zinc-600'>
          {createdAt.toLocaleString()}
        </span>
      </div>
    </li>
  );
}
