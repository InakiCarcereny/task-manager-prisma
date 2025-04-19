'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/Button';

export function ToggleThemeButton(): React.JSX.Element {
  const { setTheme } = useTheme();

  return (
    <Button
      onClick={() => setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'))}
      variant='secondary'
    >
      <span>Toggle theme</span>
    </Button>
  );
}
