import type { ButtonHTMLAttributes, ReactNode } from 'react'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly variant?: 'primary' | 'secondary' | 'danger'
  readonly size?: 'sm' | 'md' | 'lg'
  readonly children: ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: IButtonProps): JSX.Element {
  const baseClasses = 'inline-flex items-center justify-center rounded font-medium transition-colors'
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  }
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
