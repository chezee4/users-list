'use client';

import { Search } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { useDebounce } from '@/hooks/useDebounce';

interface SearchFilterProps {
  onSearchChange: (term: string) => void;
  placeholder?: string;
}

export default function SearchFilter({
  onSearchChange,
  placeholder = 'Search...',
}: SearchFilterProps) {
  const debouncedOnChange = useDebounce(onSearchChange, 300);

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Search className="h-4 w-4 text-muted-foreground" />
      </div>
      <Input
        type="text"
        placeholder={placeholder}
        className="pl-10"
        onChange={(e) => debouncedOnChange(e.target.value)}
      />
    </div>
  );
}
