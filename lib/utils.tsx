import React from 'react';

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const repeatComponent = (Component: React.FC, count: number) => {
  return Array.from({ length: count }).map((_, index) => (
    <Component key={index} />
  ));
};
