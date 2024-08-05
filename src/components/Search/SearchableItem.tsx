import { ActionIcon, Flex, FlexProps, Text } from '@mantine/core';

import { IconCheck, IconPlus } from '@tabler/icons-react';
import classes from './Search.module.css';

type SearchableItemProps = {
  name: string;
  selected?: boolean;
  onSelect?: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
} & FlexProps;

export function SearchableItem({
  name,
  selected,
  onSelect,
  isLoading,
  isDisabled,
  ...props
}: SearchableItemProps) {
  return (
    <Flex
      {...props}
      onClick={onSelect}
      align="center"
      gap={10}
      style={{ pointerEvents: isDisabled ? 'none' : 'all' }}
      classNames={{ root: classes.listItem }}
    >
      <ActionIcon
        size="sm"
        variant={selected ? 'filled' : 'subtle'}
        radius="md"
        loading={isLoading}
        onClick={(e) => {
          e.stopPropagation();
          onSelect?.();
        }}
      >
        {selected ? <IconCheck size={16} /> : <IconPlus size={16} />}
      </ActionIcon>
      <Text c="dimmed" fz={14}>
        {name}
      </Text>
    </Flex>
  );
}
