import { ActionIcon, Box, Divider, Flex, SimpleGrid, Title, Tooltip } from '@mantine/core';
import { IconPlaylistAdd } from '@tabler/icons-react';
import { ListButton } from '../ListButton/ListButton';

export function Siderbar() {
  return (
    <Box>
      <Flex align="center" justify="space-between" h={54}>
        <Title order={3}>Minhas Listas</Title>

        <Tooltip label="Add List" withArrow>
          <ActionIcon variant="filled" aria-label="Settings" size="lg">
            <IconPlaylistAdd size={14} />
          </ActionIcon>
        </Tooltip>
      </Flex>
      <Divider my="md" style={{ borderColor: 'var(--mantine-color-gray-2)' }} />
      <SimpleGrid cols={1} spacing="4">
        <ListButton />
        <ListButton />
        <ListButton />
        <ListButton />
        <ListButton />
        <ListButton />
        <ListButton />
        <ListButton />
        <ListButton />
        <ListButton />
        <ListButton />
      </SimpleGrid>
    </Box>
  );
}
