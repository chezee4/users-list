import UserCardSkeleton from '@/features/users/components/user-card-skeleton';
import { repeatComponent } from '@/lib/utils';

export default function UserListSkeleton() {
  const userCardSkeletons = repeatComponent(UserCardSkeleton, 6);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {userCardSkeletons}
    </div>
  );
}
