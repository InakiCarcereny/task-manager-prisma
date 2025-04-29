'use client';

import { CreateTask, createTaskSchema } from '@/schemas/task';
import { zodResolver } from '@hookform/resolvers/zod';
import { JSX } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { createTask } from '@/actions/task';
import { useModalStore } from '@/store/modal-store';
import { toast } from 'sonner';

export function TaskForm(): JSX.Element {
  const { closeModal } = useModalStore();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTask>({
    resolver: zodResolver(createTaskSchema),
  });

  const onSubmit: SubmitHandler<CreateTask> = async (data) => {
    await createTask(data);
    closeModal();

    toast.success('Task created successfully');
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
        Create
      </Button>
    </form>
  );
}
