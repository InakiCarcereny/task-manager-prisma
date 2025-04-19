'use client';

import { Button } from '@/components/ui/Button';
import { Plus } from '@/icons/Plus';
import { JSX } from 'react';

export function CreateTaskButton(): JSX.Element {
  return (
    <Button
      onClick={() => console.log('create')}
      icon={<Plus />}
      variant='secondary'
    >
      <span>Create</span>
    </Button>
  );
}
