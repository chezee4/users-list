'use client';

import { useMemo } from 'react';

import type { User } from '@/types/user';

type SearchableValue = string | number | boolean | null | undefined | object;

const containsSearchTerm = (
  value: SearchableValue,
  searchTerm: string,
): boolean => {
  if (typeof value === 'string') {
    return value.toLowerCase().includes(searchTerm);
  }

  if (typeof value === 'number') {
    return value.toString().includes(searchTerm);
  }

  if (typeof value === 'object' && value !== null) {
    return Object.values(value).some((nestedValue) =>
      containsSearchTerm(nestedValue, searchTerm),
    );
  }

  return false;
};

export function useFilterUsers(users: User[], searchTerm: string) {
  return useMemo(() => {
    if (!searchTerm) return users;

    const normalizedSearchTerm = searchTerm.toLowerCase().trim();

    if (!normalizedSearchTerm) return users;

    return users.filter((user) => {
      if (
        user.name.toLowerCase().includes(normalizedSearchTerm) ||
        user.email.toLowerCase().includes(normalizedSearchTerm) ||
        user.username.toLowerCase().includes(normalizedSearchTerm)
      ) {
        return true;
      }

      return containsSearchTerm(user, normalizedSearchTerm);
    });
  }, [users, searchTerm]);
}
