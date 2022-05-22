import { cls } from '@libs/client';

export interface ButtonProps extends React.ComponentProps<'button'> {
  size?: ButtonSize;
  kind?: ButtonKind;
  loading?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}

export default function Button({
  size = 'large',
  kind = 'primary',
  loading,
  children,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      onClick={() => onClick?.()}
      className={cls(
        'relative box-border w-full rounded-md border border-transparent px-4 font-medium shadow-sm',
        'focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2',
        buttonKinds[kind],
        buttonSizes[size],
        (props.disabled || loading) && 'disabled cursor-not-allowed opacity-60',
        props.className,
      )}
    >
      <span className={cls(loading && 'text-black/0')}>{children}</span>
      {loading && <span className="absolute inset-1">...</span>}
    </button>
  );
}

const buttonKinds = {
  primary: 'text-white bg-stone-500 hover:bg-stone-600',
  secondary: 'text-stone-500 ring-1 ring-stone-300 hover:ring-stone-400',
};

export type ButtonKind = keyof typeof buttonKinds;

const buttonSizes = {
  large: 'py-3 text-base',
  normal: 'py-2 text-sm',
};

export type ButtonSize = keyof typeof buttonSizes;
