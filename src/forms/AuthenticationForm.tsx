import {
  Anchor,
  Button,
  Checkbox,
  Divider,
  Group,
  Paper,
  PaperProps,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { upperFirst, useToggle } from '@mantine/hooks';
import { IconBrandGoogleFilled, IconBrandTwitterFilled } from '@tabler/icons-react';

export function AuthenticationForm(props: PaperProps) {
  const [type, toggle] = useToggle(['login', 'register']);
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) => (val.length <= 6 ? 'Min. 6 caracteres' : null),
    },
  });

  return (
    <Paper radius="md" p="xl" withBorder {...props}>
      <Text size="lg" fw={500}>
        Bem vindo ao List air
      </Text>

      <Group grow mb="md" mt="md">
        <Button leftSection={<IconBrandGoogleFilled size={20} />} radius="xl">
          Google
        </Button>
        <Button leftSection={<IconBrandTwitterFilled size={20} />} radius="xl">
          Twitter
        </Button>
      </Group>

      <Divider label="ou continue com email" labelPosition="center" my="lg" />

      <form onSubmit={form.onSubmit(() => {})}>
        <Stack>
          {type === 'register' && (
            <TextInput
              label="Name"
              placeholder="Seu nome"
              value={form.values.name}
              onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
              radius="md"
            />
          )}

          <TextInput
            required
            label="Email"
            placeholder="hello@listair.dev"
            value={form.values.email}
            onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
            error={form.errors.email && 'Invalid email'}
            radius="md"
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Sua senha"
            value={form.values.password}
            onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
            error={form.errors.password && 'Min. 6 caracteres'}
            radius="md"
          />

          {type === 'register' && (
            <Checkbox
              label="Eu concordo com os termos de uso"
              checked={form.values.terms}
              onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
            />
          )}
        </Stack>

        <Group justify="space-between" mt="xl">
          <Anchor component="button" type="button" c="dimmed" onClick={() => toggle()} size="xs">
            {type === 'register' ? 'Já possui uma conta? Login' : 'Não tem uma conta? Crie uma'}
          </Anchor>
          <Button type="submit" radius="xl">
            {upperFirst(type ? 'criar conta' : 'login')}
          </Button>
        </Group>
      </form>
    </Paper>
  );
}
