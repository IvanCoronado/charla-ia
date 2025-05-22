import { db } from './client';
import { tx, id } from '@instantdb/react';
import type { InstaQLEntity } from '@instantdb/react';
import type { AppSchema } from './client';

export type User = InstaQLEntity<AppSchema, '$users'>;

export const useUsers = () =>
  db.useQuery({
    $users: { sort: { by: 'email', order: 'desc' } },
  });

export const useUserByEmail = (email: string) =>
  db.useQuery({
    $users: { where: 'email == $email', params: { email } },
  });

export const useCreateUser = () => {
  return async (email: string) => {
    const userId = id();
    try {
      await db.transact([tx.$users[userId].update({ email })]);
      return { success: true, id: userId };
    } catch (error) {
      return { success: false, error };
    }
  };
};

export const useUpdateUser = () => {
  return async (userId: string, email: string) => {
    try {
      await db.transact([tx.$users[userId].update({ email })]);
      return { success: true };
    } catch (error) {
      return { success: false, error };
    }
  };
};

export const useDeleteUser = () => {
  return async (userId: string) => {
    try {
      await db.transact([tx.$users[userId].delete()]);
      return { success: true };
    } catch (error) {
      return { success: false, error };
    }
  };
};

export const useDeleteUsers = () => {
  return async (userIds: string[]) => {
    if (!userIds?.length) return { success: true, deletedCount: 0 };

    try {
      await db.transact(userIds.map((userId) => tx.$users[userId].delete()));
      return { success: true, deletedCount: userIds.length };
    } catch (error) {
      return { success: false, error };
    }
  };
};
