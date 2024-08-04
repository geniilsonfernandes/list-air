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

export function Siderbar() {
  return (
    <Box h="100%">
      <Flex align="center" justify="space-between" h={54}>
        <Title order={3}>Minhas Listas</Title>

        <Tooltip label="Add List" withArrow>
          <ActionIcon variant="filled" aria-label="Settings" size="lg">
            <IconPlaylistAdd size={14} />
          </ActionIcon>
        </Tooltip>
      </Flex>
      <Divider my="md" />
      <ScrollArea h={cssToken.safeAreaHeight}>
        <SimpleGrid spacing="xs">
          {Array.from({ length: 5 }).map((_, index) => (
            <ListButton key={index} />
          ))}
        </SimpleGrid>
      </ScrollArea>
    </Box>
  );
}
