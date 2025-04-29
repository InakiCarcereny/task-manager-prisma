'use client';

import { useCloseOnEscape } from '@/hooks/useCloseOnEscape';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { useModalStore } from '@/store/modal-store';
import { JSX, useRef } from 'react';
import { CloseModalButton } from '@/components/CloseModalButton';
import { TaskForm } from '@/components/TaskForm';

export function CreateTaskModal(): JSX.Element {
  const { isOpen, type, closeModal } = useModalStore();

  const modalRef = useRef<HTMLDivElement | null>(null);

  useCloseOnEscape(closeModal, isOpen);

  useOutsideClick(modalRef, closeModal, isOpen);

  return (
    <>
      {isOpen && type === 'create-task' && (
        <div className='absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-black/50'>
          <div
            ref={modalRef}
            className='flex h-[500px] w-[450px] flex-col gap-8 rounded-md bg-white px-4 py-4'
          >
            <header className='flex w-full items-center justify-between'>
              <h1 className='text-2xl font-semibold text-black'>Task</h1>

              <CloseModalButton />
            </header>

            <TaskForm />
          </div>
        </div>
      )}
    </>
  );
}
