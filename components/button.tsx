import { clsx } from 'clsx'
import React from 'react'

type Props = Omit<React.ComponentProps<'button'>, 'className'> & {}

const Button = React.forwardRef<HTMLButtonElement, Props>(({ children, ...props }, ref) => (
  <button
    ref={ref}
    {...props}
    className={clsx(
      'inline-flex select-none items-center justify-center rounded-md px-4 py-2 text-sm font-medium',
      'bg-white text-gray-700 hover:bg-gray-50  ',
      'hover:bg-gray-50',
      'focus:outline-none',
      // Register all radix states
      'group',
      'radix-state-open:bg-gray-50',
      'radix-state-on:bg-gray-50',
      'radix-state-instant-open:bg-gray-50 radix-state-delayed-open:bg-gray-50',
      'max-w-xs mt-4 space-y-4 z-50'
    )}
  >
    {children}
  </button>
))

Button.displayName = 'Button'
export default Button
