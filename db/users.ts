import { db } from './client';

export const useUsers = () => {
  return db.useQuery({
    $users: {
      sort: { by: 'email', order: 'desc' },
    },
  });
};

export const useUserByEmail = (email: string) => {
  return db.useQuery({
    $users: {
      where: 'email == $email',
      params: { email },
    },
  });
};
