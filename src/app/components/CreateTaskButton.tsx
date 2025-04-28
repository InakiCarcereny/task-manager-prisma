'use client';

import { Button } from '@/components/ui/Button';
import { Plus } from '@/icons/Plus';
import { useModalStore } from '@/store/modal-store';
import { JSX } from 'react';

export function CreateTaskButton(): JSX.Element {
  const { openModal } = useModalStore();

  return (
    <Button
      onClick={() => openModal('create-task')}
      icon={<Plus />}
      variant='tertiary'
    >
      Create
    </Button>
  );
}
