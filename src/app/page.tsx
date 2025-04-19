import { JSX, Suspense } from 'react';
import { HeaderLayout } from '@/layouts/header-layout';
import { TaskList } from '@/components/TaskList';

export default function Home(): JSX.Element {
  return (
    <>
      <HeaderLayout>hello</HeaderLayout>

      <Suspense fallback={<div>Loading...</div>}>
        <TaskList />
      </Suspense>
    </>
  );
}
