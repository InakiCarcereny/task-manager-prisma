import { JSX } from 'react';
import { Task } from '@/components/Task';

export function TaskList(): JSX.Element {
  return (
    <ul>
      <Task />
    </ul>
  );
}
