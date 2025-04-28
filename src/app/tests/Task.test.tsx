import { render, screen } from '@testing-library/react';
import { Task } from '@/components/Task';

describe('<Task />', () => {
  it('renders the task component', () => {
    render(
      <Task
        name='Task'
        description='Description'
        priority='High'
        id='1'
        createdAt={new Date()}
      />,
    );

    const h2 = screen.getByRole('heading', {
      level: 2,
      name: 'Task',
    });
    expect(h2).toBeInTheDocument();

    const p = screen.getByText('Description');
    expect(p).toBeInTheDocument();
  });
});
