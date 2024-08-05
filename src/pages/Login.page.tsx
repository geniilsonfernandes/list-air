import { Center, Container } from '@mantine/core';

import { AuthenticationForm } from '@/forms/AuthenticationForm';

export function LoginPage() {
  return (
    <Container>
      <Center h="100vh">
        <AuthenticationForm
          w={{
            base: '100%',
            sm: '400px',
            lg: '600px',
          }}
        />
      </Center>
    </Container>
  );
}
