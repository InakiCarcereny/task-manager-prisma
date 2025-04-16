import { JSX, ReactNode } from 'react';

interface HeaderLayoutProps {
  children: ReactNode;
}

export function HeaderLayout({ children }: HeaderLayoutProps): JSX.Element {
  return (
    <div>
      <header>
        <h1>Header layout</h1>
      </header>
      <div>{children}</div>
    </div>
  );
}
