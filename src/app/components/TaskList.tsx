import { JSX } from 'react';
import { Task } from '@/components/Task';
import { getTasks } from '@/actions/task';

export async function TaskList(): Promise<JSX.Element> {
  const allTasks = await getTasks();

  // const [todoList, todos] = useDragAndDrop<HTMLUListElement, string>(allTasks, {
  //   group: 'todoList',
  // });

  // const [doneList, dones] = useDragAndDrop<HTMLUListElement, string>(
  //   doneItems,
  //   {
  //     group: 'todoList',
  //   },
  // );

  return (
    <ul className='grid w-full grid-cols-3 gap-x-2 gap-y-4'>
      {allTasks.map((task) => (
        <Task
          key={task.id}
          name={task.name}
          description={task.description}
          priority={task.priority}
          createdAt={task.createdAt}
        />
      ))}
    </ul>
  );
}
