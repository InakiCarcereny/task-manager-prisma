import { Header } from '@/components/Header';
import { Button } from '@/components/ui/Button';
import { JSX } from 'react';
import { HeaderLayout } from '@/layouts/header-layout';

export default function Home(): JSX.Element {
  return (
    <>
      <Header />

      <HeaderLayout>
        <Button>Hello world</Button>
      </HeaderLayout>
    </>
  );
}
