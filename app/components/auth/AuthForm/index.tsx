'use client';

import { useState } from 'react';
import { EmailStep } from './EmailStep';
import { CodeStep } from './CodeStep';

interface Props {}

export const AuthForm = ({}: Props) => {
  const [sentEmail, setSentEmail] = useState('');
  const [error, setError] = useState('');

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md">
        {!sentEmail ? (
          <EmailStep onSendEmail={setSentEmail} setError={setError} />
        ) : (
          <CodeStep sentEmail={sentEmail} setError={setError} />
        )}
        {error && <p className="mt-4 text-center text-sm text-red-600">{error}</p>}
      </div>
    </div>
  );
};
