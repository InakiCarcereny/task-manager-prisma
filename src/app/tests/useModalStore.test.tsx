import { act } from 'react';
import { useModalStore } from '@/store/modal-store';

describe('useModalStore', () => {
  it('Opens modal when openModal is called', () => {
    act(() => {
      useModalStore.getState().openModal('create-task');
    });

    const state = useModalStore.getState();

    expect(state.isOpen).toBe(true);
    expect(state.type).toBe('create-task');
  });

  it('Closes modal when closeModal is called', () => {
    act(() => {
      useModalStore.getState().openModal('create-task');
    });

    act(() => {
      useModalStore.getState().closeModal();
    });

    const state = useModalStore.getState();

    expect(state.isOpen).toBe(false);
    expect(state.type).toBe(null);
  });
});
