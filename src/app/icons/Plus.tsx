import React from 'react';
import type { JSX, SVGProps } from 'react';

export function Plus(props: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        fill='currentColor'
        d='M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2'
      ></path>
    </svg>
  );
}
