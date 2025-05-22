'use client';

import { db } from '@/db/client';
import { AuthForm } from '@/app/components/auth/AuthForm';
import { UserProfile } from '@/app/components/auth/UserProfile';

export default function Home() {
  const { isLoading, user, error } = db.useAuth();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-red-500">Error: {error.message}</p>
      </div>
    );
  }

  if (user) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
        <div className="w-full max-w-md">
          <UserProfile user={user} onSignOut={() => db.auth.signOut()} />
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <AuthForm />
    </main>
  );
}
