'use client';

import { User } from '@instantdb/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface Props {
  user: User;
  onSignOut: () => void;
}

export const UserProfile = ({ user, onSignOut }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>👋</CardTitle>
        <CardDescription>Estás conectado como {user.email}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button onClick={onSignOut} variant="outline" className="w-full">
          Cerrar Sesión
        </Button>
      </CardContent>
    </Card>
  );
};
