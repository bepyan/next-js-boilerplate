import { cls } from '@libs/client';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  loading?: boolean;
  children?: React.ReactNode;
}

export const Button = ({ size = 'large', loading, children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={cls(
        'w-full rounded-md border border-transparent px-4 font-medium text-white shadow-sm',
        'bg-orange-500 hover:bg-orange-600',
        'focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2',
        loading && 'disabled',
        buttonSizes[size],
      )}
    >
      {loading ? '...' : children}
    </button>
  );
};

const buttonKinds = {};

const buttonSizes = {
  large: 'py-3 text-base',
  normal: 'py-2 text-sm',
};

export type ButtonSize = keyof typeof buttonSizes;
