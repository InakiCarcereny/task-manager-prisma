import { render, screen } from '@testing-library/react';
import { HeaderLayout } from '@/layouts/header-layout';

describe('<HeaderLayout />', () => {
  it('renders the h1 element', () => {
    render(<HeaderLayout>Test</HeaderLayout>);

    const h1 = screen.getByRole('heading', {
      level: 1,
    });

    expect(h1).toBeInTheDocument();
  });
});
