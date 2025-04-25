/* eslint-disable @typescript-eslint/no-explicit-any */

import { cn } from '@/utils/cn';
import { cva } from 'class-variance-authority';
import { JSX } from 'react';
import { Controller, FieldError, Control } from 'react-hook-form';

const inputVariants = cva('rounded-md border bg-transparent px-4 py-2 w-full', {
  variants: {
    variant: {
      primary: 'border-white text-white',
      secondary: 'border-black text-black',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'primary' | 'secondary';
  icon?: JSX.Element;
  error?: FieldError;
  control: Control<any>;
}

export function Input({
  className,
  variant,
  icon,
  control,
  error,
  ...props
}: InputProps): JSX.Element {
  return (
    <Controller
      name={props.name as string}
      control={control}
      render={({ field }) => (
        <div>
          {icon && <span>{icon}</span>}

          <input
            {...props}
            {...field}
            className={cn(inputVariants({ variant }), className)}
          />

          {error && <span>{error.message}</span>}
        </div>
      )}
    />
  );
}
