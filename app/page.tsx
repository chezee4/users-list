import { Suspense } from 'react';

import { LoadingSpinner } from '@/components/ui/loading-spinner';
import UserDirectoryContainer from '@/features/users/components/user-directory-container';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">User Directory</h1>
      <Suspense fallback={<LoadingSpinner />}>
        <UserDirectoryContainer />
      </Suspense>
    </main>
  );
}
