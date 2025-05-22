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
import { useCodeForm, type CodeFormValues } from './useCodeForm';
import { db } from '@/db/client';

interface Props {
  sentEmail: string;
  setError: (error: string) => void;
}

export const CodeStep = ({ sentEmail, setError }: Props) => {
  const form = useCodeForm();

  async function onSubmit(values: CodeFormValues) {
    try {
      await db.auth.signInWithMagicCode({
        email: sentEmail,
        code: values.code,
      });
      setError('');
    } catch (err: any) {
      form.reset();
      setError(err.body?.message || 'Ha ocurrido un error');
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ingresa el Código de Verificación</CardTitle>
        <CardDescription>
          Hemos enviado un código a {sentEmail}. Por favor revisa tu correo e ingresa el código.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Código de Verificación</FormLabel>
                  <FormControl>
                    <Input placeholder="Ingresa el código de 6 dígitos" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Verificar Código
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
