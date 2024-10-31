import { PropsWithChildren } from 'react';

type ButtonProps = PropsWithChildren<{
  className?: string;
  variant: 'primary' | 'secondary' | 'tertiary';
  size: 'small' | 'middle' | 'large';
  onClick?: () => void;
}>;

export default function ButtonWithChildren({ children, className, variant = 'primary', size = 'middle', onClick }: ButtonProps) {
  let variantStyles;
  if (variant === 'primary') {
    variantStyles = 'bg-blue-600 hover:bg-blue-400 focus-visible:outline-blue-500 active:bg-blue-600'
  } else if (variant === 'secondary') {
    variantStyles = 'bg-orange-700 hover:bg-orange-400 focus-visible:outline-orange-500 active:bg-orange-600'
  } else if (variant === 'tertiary') {
    variantStyles = 'bg-gray-900  hover:bg-gray-800  focus-visible:outline-gray-500 active:bg-gray-600'
  }

  let sizeStyles;
  if (size === 'small') {
    sizeStyles = 'p-1';
  } else if (size === 'middle') {
    sizeStyles = 'p-2';
  } else if (size === 'large') {
    sizeStyles = 'p-3';
  }

  return (
    <button
      className={`
        flex h-10 items-center rounded-lg px-4 text-sm font-medium text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 aria-disabled:cursor-not-allowed aria-disabled:opacity-50
        ${variantStyles} ${sizeStyles} ${className ?? ''} 
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
