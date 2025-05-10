import { Mail, Phone, Globe, Briefcase, MapPin } from 'lucide-react';
import Link from 'next/link';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { User } from '@/types/user';

interface UserCardProps {
  user: User;
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <Card className="h-full hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{user.name}</CardTitle>
        <p className="text-sm text-muted-foreground">@{user.username}</p>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-muted-foreground" />
          <Link
            href={`mailto:${user.email}`}
            className="text-sm hover:underline"
          >
            {user.email}
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-muted-foreground" />
          <Link href={`tel:${user.phone}`} className="text-sm">
            {user.phone}
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Globe className="h-4 w-4 text-muted-foreground" />
          <Link
            href={`https://${user.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:underline"
          >
            {user.website}
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Briefcase className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">{user.company.name}</span>
        </div>

        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">{`${user.address.city}, ${user.address.street}`}</span>
        </div>
      </CardContent>
    </Card>
  );
}
