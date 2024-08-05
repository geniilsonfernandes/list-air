import { Card, CardProps, Group, Text, Title, Tooltip } from '@mantine/core';

type GloceryStatusProps = {
  title?: string;
  value?: number | string;
  tooltip?: string;
} & CardProps;

const GloceryStatusDisplay = ({ title, value, tooltip, ...props }: GloceryStatusProps) => (
  <Tooltip label={tooltip} withArrow>
    <Card withBorder p="4" px="xs" radius={6} {...props}>
      <Title order={6} fw={600}>
        {title}
      </Title>
      <Text size="xs" c="dimmed">
        {value}
      </Text>
    </Card>
  </Tooltip>
);

export function GloceryStatus() {
  return (
    <Group gap="xs" grow>
      <GloceryStatusDisplay title="Orçamento" value={10} tooltip="orçamento disponível" />

      <GloceryStatusDisplay title="Total" value={0} tooltip="Total gasto de itens selecionados" />

      <GloceryStatusDisplay
        title="Total gasto"
        value={0}
        tooltip="Total disponível de itens selecionados"
      />
    </Group>
  );
}
