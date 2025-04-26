import { JSX } from 'react';

interface TaskProps {
  name: string;
  description: string;
  priority: string;
}

export function Task({ name, description, priority }: TaskProps): JSX.Element {
  return (
    <li>
      {name} - {description} - {priority}
    </li>
  );
}
