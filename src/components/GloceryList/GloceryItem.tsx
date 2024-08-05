import { Badge, Checkbox, Flex, Group, Text } from '@mantine/core';
import { IconCurrencyDollar } from '@tabler/icons-react';

type GloceryItemProps = {
  onClick?: () => void;
};

export function GloceryItem({ onClick }: GloceryItemProps) {
  return (
    <Flex
      align="center"
      p="xs"
      w="100%"
      gap="sm"
      onClick={() => onClick?.()}
      style={{
        borderRadius: 'var(--mantine-radius-md)',
      }}
    >
      <Checkbox onClick={(e) => e.stopPropagation()} />
      <Text size="sm">Bread</Text>

      <Group ml="auto" align="center" gap="xs">
        <Badge size="sm" variant="transparent">
          1 kg
        </Badge>
        <Badge leftSection={<IconCurrencyDollar size={14} />} variant="transparent">
          1.00
        </Badge>
      </Group>
    </Flex>
  );
}
