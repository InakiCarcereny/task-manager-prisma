'use client';

import { TASK_OPTIONS } from '@/lib/task-options';
import { useRouter } from 'next/navigation';
import { JSX } from 'react';

interface TaskOptionsProps {
  id: string;
}

export function TaskOptions({ id }: TaskOptionsProps): JSX.Element {
  const router = useRouter();

  return (
    <div className='flex items-center gap-2'>
      {TASK_OPTIONS.map((option) => (
        <button
          key={option.id}
          onClick={() => option.onClick(id, router)}
          className={`cursor-pointer rounded-full p-1 ${option.bg} ${option.text}`}
        >
          {option.icon}
        </button>
      ))}
    </div>
  );
}
