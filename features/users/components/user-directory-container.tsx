'use client';

import { useState } from 'react';

import SearchFilter from '@/components/search-filter';
import UserList from '@/features/users/components/user-list';
import { useFilterUsers } from '@/features/users/hooks/use-filter-users';
import { useGetUsersQuery } from '@/services/userApi';

import UserListSkeleton from './user-list-skeleton';

export default function UserDirectoryContainer() {
  const { data: users = [], isLoading } = useGetUsersQuery();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = useFilterUsers(users, searchTerm);

  return (
    <div className="flex flex-col gap-6">
      <SearchFilter
        onSearchChange={setSearchTerm}
        placeholder="Search users by any property..."
      />
      {isLoading ? <UserListSkeleton /> : <UserList users={filteredUsers} />}
    </div>
  );
}
