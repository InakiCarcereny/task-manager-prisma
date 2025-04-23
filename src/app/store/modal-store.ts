import { create } from 'zustand';

interface ModalStore {
  isOpen: boolean;
  type: ModalType | null;
  openModal: (type: ModalType) => void;
  closeModal: () => void;
}

type ModalType = 'create-task';

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  type: null,
  openModal: (type: ModalType): void => set({ isOpen: true, type }),
  closeModal: (): void => set({ isOpen: false, type: null }),
}));
