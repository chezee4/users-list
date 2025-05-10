import { LoadingSpinner } from '@/components/ui/loading-spinner';

export default function Loading() {
  return (
    <div className="flex justify-center items-center py-20">
      <LoadingSpinner size="lg" />
    </div>
  );
}
