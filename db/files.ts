import { db } from './client';
import { tx, id } from '@instantdb/react';
import type { InstaQLEntity } from '@instantdb/react';
import type { AppSchema } from './client';

export type File = InstaQLEntity<AppSchema, '$files'>;

export const useFiles = () =>
  db.useQuery({
    $files: { sort: { by: 'path', order: 'asc' } },
  });

export const useFileByPath = (path: string) =>
  db.useQuery({
    $files: { where: 'path == $path', params: { path } },
  });

export const useSearchFiles = (searchTerm: string) =>
  db.useQuery({
    $files: { where: 'path contains $searchTerm', params: { searchTerm } },
  });

export const useCreateFile = () => {
  return async (data: { path?: string; url?: any }) => {
    const fileId = id();
    try {
      await db.transact([tx.$files[fileId].update(data)]);
      return { success: true, id: fileId };
    } catch (error) {
      return { success: false, error };
    }
  };
};

export const useUpdateFile = () => {
  return async (fileId: string, data: Partial<Omit<File, 'id'>>) => {
    try {
      await db.transact([tx.$files[fileId].update(data)]);
      return { success: true };
    } catch (error) {
      return { success: false, error };
    }
  };
};

export const useDeleteFile = () => {
  return async (fileId: string) => {
    try {
      await db.transact([tx.$files[fileId].delete()]);
      return { success: true };
    } catch (error) {
      return { success: false, error };
    }
  };
};

export const useDeleteFiles = () => {
  return async (fileIds: string[]) => {
    if (!fileIds?.length) return { success: true, deletedCount: 0 };

    try {
      await db.transact(fileIds.map((fileId) => tx.$files[fileId].delete()));
      return { success: true, deletedCount: fileIds.length };
    } catch (error) {
      return { success: false, error };
    }
  };
};
