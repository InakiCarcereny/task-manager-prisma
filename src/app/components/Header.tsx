import { JSX } from 'react';

export function Header(): JSX.Element {
  return (
    <header className='mx-auto flex h-[80px] w-full items-center justify-between border-b bg-[#1e1f1f]'>
      <h1 className='text-2xl font-semibold text-white'>Tasks</h1>
    </header>
  );
}
