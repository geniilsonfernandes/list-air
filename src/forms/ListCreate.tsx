import { Button, Divider, Flex, NumberInput, Stack, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconCurrencyDollar, IconDeviceFloppy } from '@tabler/icons-react';

type ListCreateProps = {
  onCancel?: () => void;
  onSuccess?: () => void;
};

export function ListCreate({ onCancel, onSuccess }: ListCreateProps) {
  const form = useForm({
    mode: 'controlled',
    initialValues: {
      list_name: '',
      budget: '',
    },
  });
  return (
    <form onSubmit={form.onSubmit(() => {})}>
      <Stack align="stretch" gap="sm">
        <TextInput
          label="Nome da lista"
          placeholder="Name"
          key={form.key('list_name')}
          {...form.getInputProps('list_name')}
        />
        <NumberInput
          label="orcamento"
          prefix="R$ "
          placeholder="R$ 3.00"
          leftSection={<IconCurrencyDollar size={16} />}
          decimalScale={2}
          decimalSeparator="."
          hideControls
          allowedDecimalSeparators={['.']}
          key={form.key('budget')}
          {...form.getInputProps('budget')}
        />
      </Stack>
      <Divider my="md" />
      <Flex justify="space-between" mt="md">
        <Button onClick={() => onCancel?.()} variant="outline" color="red.5">
          Cancelar
        </Button>
        <Button onClick={() => onSuccess?.()} rightSection={<IconDeviceFloppy size={16} />}>
          criar lista
        </Button>
      </Flex>
    </form>
  );
}
