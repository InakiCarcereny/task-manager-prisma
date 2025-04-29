import { render, screen, fireEvent } from '@testing-library/react';
import { CreateTaskModal } from '@/components/CreateTaskModal';
import { useModalStore } from '@/store/modal-store';

jest.mock('@/store/modal-store', () => ({
  useModalStore: jest.fn(),
}));

describe('CreateTaskModal', () => {
  it('debería cerrar la modal al presionar Escape', () => {
    const closeModal = jest.fn();

    (useModalStore as jest.Mock).mockReturnValue({
      isOpen: true,
      type: 'create-task',
      closeModal,
    });

    render(<CreateTaskModal />);

    // Asegurarnos que la modal se renderizó
    expect(screen.getByText('Task')).toBeInTheDocument();

    // Simulamos la tecla Escape
    fireEvent.keyDown(window, { key: 'Escape', code: 'Escape' });

    // Debe haberse llamado closeModal
    expect(closeModal).toHaveBeenCalled();
  });
});
