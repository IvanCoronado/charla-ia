import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const emailSchema = z.object({
  email: z.string().email('Por favor ingresa un correo electrónico válido'),
});

export type EmailFormValues = z.infer<typeof emailSchema>;

export const useEmailForm = (initialValues?: Partial<EmailFormValues>) => {
  return useForm<EmailFormValues>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: '',
      ...initialValues,
    },
    mode: 'onChange',
  });
};
