'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useEmailForm, type EmailFormValues } from './useEmailForm';
import { db } from '@/db/client';

interface Props {
  onSendEmail: (email: string) => void;
  setError: (error: string) => void;
}

export const EmailStep = ({ onSendEmail, setError }: Props) => {
  const form = useEmailForm();

  async function onSubmit(values: EmailFormValues) {
    try {
      await db.auth.sendMagicCode({ email: values.email });
      onSendEmail(values.email);
      setError('');
    } catch (err: any) {
      setError(err.body?.message || 'Ha ocurrido un error');
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Iniciar Sesión</CardTitle>
        <CardDescription>Ingresa tu correo para recibir un código de verificación</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo Electrónico</FormLabel>
                  <FormControl>
                    <Input placeholder="Ingresa tu correo" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Enviar Código
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
