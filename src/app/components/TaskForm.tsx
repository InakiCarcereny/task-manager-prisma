'use client';

import { CreateTask, createTaskSchema } from '@/schemas/task';
import { zodResolver } from '@hookform/resolvers/zod';
import { JSX } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '@/components/ui/Input';
import { Button } from './ui/Button';

export function TaskForm(): JSX.Element {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTask>({
    resolver: zodResolver(createTaskSchema),
  });

  const onSubmit: SubmitHandler<CreateTask> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex h-full flex-col justify-between'
    >
      <div className='flex flex-col gap-6'>
        <Input
          name='name'
          type='text'
          placeholder='Name'
          control={control}
          error={errors.name}
        />

        <Input
          name='description'
          type='text'
          placeholder='Description'
          control={control}
          error={errors.description}
        />

        <Input
          name='priority'
          type='text'
          placeholder='Priority'
          control={control}
          error={errors.priority}
        />
      </div>

      <Button type='submit' variant='secondary'>
        Create
      </Button>
    </form>
  );
}
