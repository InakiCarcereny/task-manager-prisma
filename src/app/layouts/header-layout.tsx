import { CreateTaskButton } from '@/components/CreateTaskButton';
import { ToggleThemeButton } from '@/components/ToggleThemeButton';
import { Search } from '@/icons/Search';
import { JSX, ReactNode } from 'react';

interface HeaderLayoutProps {
  children: ReactNode;
}

export function HeaderLayout({ children }: HeaderLayoutProps): JSX.Element {
  return (
    <>
      <header className='w-full border-b bg-[#1e1f1f]'>
        <div className='mx-auto flex h-[80px] max-w-[1252px] items-center justify-between'>
          <h1 className='text-2xl font-semibold text-white'>Tasks</h1>

          <div className='flex items-center gap-4'>
            <div className='flex max-w-[250px] items-center gap-2 rounded-md bg-white px-4 py-2'>
              <input
                type='text'
                className='w-full border-none bg-transparent focus:outline-none'
                placeholder='Search...'
              />

              <span>
                <Search />
              </span>
            </div>

            <CreateTaskButton />

            <ToggleThemeButton />
          </div>
        </div>
      </header>

      <main className='mx-auto flex h-full max-w-[1252px] flex-col py-4'>
        {children}
      </main>
    </>
  );
}
