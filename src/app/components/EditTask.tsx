'use client';

import { UpdateTask, updateTaskSchema } from '@/schemas/task';
import { zodResolver } from '@hookform/resolvers/zod';
import { JSX, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from './ui/Input';
import { useRouter } from 'next/navigation';
import { Button } from './ui/Button';
import { updateTask } from '@/actions/task';

interface EditTaskProps {
  id: string;
  name: string;
  descritpion: string;
  priority: string;
}

export function EditTask({
  id,
  name,
  descritpion,
  priority,
}: EditTaskProps): JSX.Element {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<UpdateTask>({
    resolver: zodResolver(updateTaskSchema),
  });

  const onSubmit: SubmitHandler<UpdateTask> = async (data) => {
    updateTask(id, data);

    router.push('/');
  };

  useEffect(() => {
    if (id) {
      setValue('name', name);
      setValue('description', descritpion);
      setValue('priority', priority);
    }
  }, [id, name, descritpion, priority, setValue]);

  return (
    <form
      className='flex h-full flex-col justify-between'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='flex flex-col gap-6'>
        <Input
          name='name'
          type='text'
          placeholder='Name'
          control={control}
          error={errors.name}
          variant='secondary'
        />

        <Input
          name='description'
          type='text'
          placeholder='Description'
          control={control}
          error={errors.description}
          variant='secondary'
        />

        <Input
          name='priority'
          type='text'
          placeholder='Priority'
          control={control}
          error={errors.priority}
          variant='secondary'
        />
      </div>

      <Button type='submit' variant='primary'>
        Save
      </Button>
    </form>
  );
}
