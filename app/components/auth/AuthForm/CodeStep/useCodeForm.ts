import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const codeSchema = z.object({
  code: z.string().min(6, 'Por favor ingresa el código de 6 dígitos'),
});

export type CodeFormValues = z.infer<typeof codeSchema>;

export const useCodeForm = (initialValues?: Partial<CodeFormValues>) => {
  return useForm<CodeFormValues>({
    resolver: zodResolver(codeSchema),
    defaultValues: {
      code: '',
      ...initialValues,
    },
    mode: 'onChange',
  });
};
