import { ActionIcon, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { IconSend } from '@tabler/icons-react';
import { zodResolver } from 'mantine-form-zod-resolver';
import { useState } from 'react';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email({ message: 'Email inválido' }),
});

export function EmailInviteInput() {
  const [loading, setLoading] = useState(false);
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
    },

    validate: zodResolver(schema),
  });

  async function handleSubmit(values: typeof form.values) {
    setLoading(true);
    console.log(values);

    notifications.show({
      title: 'Convite enviado',
      message: 'Um convite foi enviado para o email informado',
    });
    setLoading(false);
    form.reset();
  }

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Text size="sm" c="dimmed">
        Enviar convite por email
      </Text>
      <TextInput
        placeholder="email"
        rightSectionPointerEvents="all"
        mt="md"
        size="md"
        radius="xl"
        variant="filled"
        disabled={loading}
        rightSection={
          <ActionIcon
            aria-label="Send"
            loading={loading}
            type="submit"
            variant="filled"
            disabled={!!form.errors.email || loading}
            radius="xl"
            title="Send"
            data-testid="send-invite"
          >
            <IconSend size={14} />
          </ActionIcon>
        }
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
    </form>
  );
}
