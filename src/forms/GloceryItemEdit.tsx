import {
  ActionIcon,
  Button,
  Divider,
  Flex,
  Grid,
  Input,
  NumberInput,
  Select,
  Stack,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import {
  IconCurrencyDollar,
  IconDeviceFloppy,
  IconMinus,
  IconPlus,
  IconTrash,
} from '@tabler/icons-react';

import { useState } from 'react';

type GloceryItemEditProps = {
  onCancel?: () => void;
  onSuccess?: () => void;
};

export function GloceryItemEdit({ onCancel, onSuccess }: GloceryItemEditProps) {
  const [preview, setPreview] = useState('');
  const form = useForm({
    mode: 'controlled',
    initialValues: {
      name: '',
      value: '',
      amount: '',
      unit: '',
    },
    onValuesChange: (values) => {
      const { unit, amount, value } = values;
      setPreview(`R$ ${(+amount * +value).toFixed(2)} ${unit}`);
    },
  });
  return (
    <>
      <form onSubmit={form.onSubmit(() => {})}>
        <Stack align="stretch" gap="sm">
          <TextInput
            label="Name"
            placeholder="Name"
            key={form.key('name')}
            {...form.getInputProps('name')}
          />
          <Grid>
            <Grid.Col span={6}>
              <Select
                label="Unidade"
                placeholder="Unidade"
                key={form.key('unit')}
                {...form.getInputProps('unit')}
                data={[
                  { value: 'kg', label: 'Kg' },
                  { value: 'l', label: 'L' },
                  { value: 'un', label: 'Un' },
                  { value: 'ml', label: 'Ml' },
                  { value: 'g', label: 'G' },
                  { value: 'oz', label: 'Oz' },
                ]}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Input.Wrapper label="Quantidade">
                <Input
                  type="number"
                  placeholder="2"
                  key={form.key('amount')}
                  {...form.getInputProps('amount')}
                  rightSection={
                    <ActionIcon
                      variant="subtle"
                      size="lg"
                      onClick={() =>
                        form.setFieldValue(
                          'amount',
                          (Number(form.getValues().amount) + 1).toString()
                        )
                      }
                    >
                      <IconPlus size={16} />
                    </ActionIcon>
                  }
                  styles={{
                    input: { textAlign: 'center' },
                  }}
                  leftSection={
                    <ActionIcon
                      variant="subtle"
                      size="lg"
                      onClick={() => {
                        if (Number(form.getValues().amount) > 0) {
                          form.setFieldValue(
                            'amount',
                            (Number(form.getValues().amount) - 1).toString()
                          );
                        }
                      }}
                    >
                      <IconMinus size={16} />
                    </ActionIcon>
                  }
                  leftSectionPointerEvents="all"
                  rightSectionPointerEvents="all"
                />
              </Input.Wrapper>
            </Grid.Col>

            <Grid.Col span={6}>
              <NumberInput
                label="Valor"
                prefix="R$ "
                placeholder="R$ 3.00"
                leftSection={<IconCurrencyDollar size={16} />}
                decimalScale={2}
                decimalSeparator="."
                hideControls
                allowedDecimalSeparators={['.']}
                key={form.key('value')}
                {...form.getInputProps('value')}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                label="Total"
                variant="unstyled"
                readOnly
                prefix="R$ "
                placeholder="R$ 3.00"
                leftSection={<IconCurrencyDollar size={16} />}
                value={preview}
              />
            </Grid.Col>
          </Grid>
        </Stack>
      </form>
      <Divider my="md" />
      <Flex justify="space-between" mt="md">
        <Button onClick={() => onCancel?.()} variant="outline" color="red.5">
          <IconTrash size={16} />
        </Button>
        <Button onClick={() => onSuccess?.()} rightSection={<IconDeviceFloppy size={16} />}>
          Salvar
        </Button>
      </Flex>
    </>
  );
}
