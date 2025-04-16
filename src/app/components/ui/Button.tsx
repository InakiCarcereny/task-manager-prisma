import { cn } from '@/utils/cn';
import { cva } from 'class-variance-authority';
import { JSX } from 'react';

const buttonVariants = cva('px-4 py-2 rounded-md font-semibold', {
  variants: {
    variant: {
      primary: 'bg-black text-white',
      secondary: 'bg-white text-black',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
} & {
  icon?: JSX.Element;
};

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

      {icon ? icon : null}
    </button>
  );
}
