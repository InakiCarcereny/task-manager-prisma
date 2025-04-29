'use client';

import { JSX } from 'react';
import { Close } from '@/icons/Close';
import { useModalStore } from '@/store/modal-store';

export function CloseModalButton(): JSX.Element {
  const { closeModal } = useModalStore();

  return (
    <button
      onClick={closeModal}
      className='cursor-pointer text-black hover:text-black/80'
    >
      <Close className='h-8 w-8' />
    </button>
  );
}
