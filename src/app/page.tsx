import { Header } from '@/components/Header';
import { Button } from '@/components/ui/Button';
import { JSX } from 'react';
import { HeaderLayout } from '@/layouts/header-layout';
import { Search } from '@/icons/Search';

export default function Home(): JSX.Element {
  return (
    <>
      <Header />

      <HeaderLayout>
        <Button variant='secondary' icon={<Search />}>
          Hello world
        </Button>
      </HeaderLayout>
    </>
  );
}
