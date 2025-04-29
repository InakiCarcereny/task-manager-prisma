import { cn } from '@/utils/cn';
import { cva } from 'class-variance-authority';
import { JSX } from 'react';

const buttonVariants = cva(
  'flex items-center justify-center rounded-md font-semibold gap-2 px-4 py-2 cursor-pointer',
  {
    variants: {
      variant: {
        primary: 'bg-black text-white',
        secondary: 'bg-white text-black',
        tertiary: 'bg-zinc-200 text-zinc-400',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  icon?: JSX.Element;
}

export function Button({
  className,
  variant,
  children,
  icon,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button {...props} className={cn(buttonVariants({ variant }), className)}>
      {children}

      {icon && <span>{icon}</span>}
    </button>
  );
}
