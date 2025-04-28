import { fireEvent, render, screen } from '@testing-library/react';
import { CreateTaskButton } from '@/components/CreateTaskButton';
import { CreateTaskModal } from '@/components/CreateTaskModal';
import { JSX } from 'react';

jest.mock('@/components/TaskForm', () => ({
  TaskForm: (): JSX.Element => <div data-testid='mock-task-form' />,
}));

describe('<CreateTaskButton />', () => {
  it('renders the button', () => {
    render(<CreateTaskButton />);

    const button = screen.getByRole('button', {
      name: 'Create',
    });
    expect(button).toBeInTheDocument();
  });

  it('renders the create task modal', () => {
    render(
      <>
        <CreateTaskModal />
        <CreateTaskButton />
      </>,
    );

    const button = screen.getByRole('button', {
      name: 'Create',
    });

    fireEvent.click(button);

    const h1 = screen.getByRole('heading', {
      level: 1,
      name: 'Task',
    });
    expect(h1).toBeInTheDocument();
  });
});
