import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(
  price: number,
  options: {
    currency?: 'USD' | 'EUR' | 'GBP' | 'BDT' | 'JPY'
    notation?: Intl.NumberFormatOptions['notation']
  } = {}
) {
  const { currency = 'USD', notation = 'compact' } = options

  // For zero price, always return $0 to avoid hydration mismatch
  if (price === 0) {
    return '$0'
  }

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    notation,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(price)
}