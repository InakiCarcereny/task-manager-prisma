import { Header } from '@/components/Header';
import { Button } from '@/components/ui/Button';
import { JSX } from 'react';

export default function Home(): JSX.Element {
  return (
    <>
      <Header />

      <Button>Click Me</Button>
    </>
  );
}
