import { Text } from '@mantine/core';
import { Logo, SignInForm } from '@medplum/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export function SignInPage(): JSX.Element {
  const navigate = useNavigate();

  return (
    <SignInForm
      projectId="34781761-e24d-4a1f-bb69-6f47c514a280"
      googleClientId="830708485209-bhjagdl1ffqt2s1ch03tc2gt48eljpel.apps.googleusercontent.com"
      onSuccess={() => navigate('/')}
    >
      <Logo size={32} />
      <Text size="lg">Sign in to Foo Provider</Text>
    </SignInForm>
  );
}
