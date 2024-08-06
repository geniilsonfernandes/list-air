import {
  ActionIcon,
  Box,
  Divider,
  Flex,
  ScrollArea,
  SimpleGrid,
  Title,
  Tooltip,
} from '@mantine/core';
import { IconPlaylistAdd } from '@tabler/icons-react';
import { ListButton } from '../ListButton/ListButton';

import { cssToken } from '@/shared/css-token';
import { useCreateListModalStore } from '@/store';

export function Siderbar() {
  const { onOpen } = useCreateListModalStore((state) => state);

  return (
    <Box h="100%">
      <Flex align="center" justify="space-between">
        <Title order={5}>Minhas Listas</Title>

        <Tooltip label="Add List" withArrow>
          <ActionIcon variant="default" onClick={onOpen} aria-label="Settings" size="lg">
            <IconPlaylistAdd size={14} />
          </ActionIcon>
        </Tooltip>
      </Flex>
      <Divider my="xs" />
      <ScrollArea h={cssToken.safeAreaHeight}>
        <SimpleGrid spacing="xs">
          {Array.from({ length: 50 }).map((_, index) => (
            <ListButton key={index} />
          ))}
        </SimpleGrid>
      </ScrollArea>
    </Box>
  );
}
