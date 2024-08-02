import { ActionIcon, Box, Flex, Text, Title, Tooltip } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconPrinter, IconShare } from '@tabler/icons-react';

import { ListSettings, SharedUsersIcons, ShareModal } from '@/components';

export function ListHeader() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Flex align="center" justify="space-between" my="lg">
      <Box>
        <Title size="md">List Header</Title>
        <Text size="xs" c="dimmed">
          Created by Genilson
        </Text>
      </Box>
      <Flex align="center" gap="xs">
        <SharedUsersIcons
          users={[
            { name: 'Genilson', image: 'https://i.pravatar.cc/150?img=1' },
            { name: 'Genilson', image: 'https://i.pravatar.cc/150?img=2' },
            { name: 'Genilson', image: 'https://i.pravatar.cc/150?img=3' },
          ]}
        />
        <Tooltip.Group openDelay={300} closeDelay={100}>
          <Tooltip label="Share" withArrow>
            <ActionIcon variant=" " aria-label="Print" size="lg" onClick={opened ? close : open}>
              <IconShare size={14} />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="Print" withArrow>
            <ActionIcon variant="default" aria-label="Print" size="lg">
              <IconPrinter size={14} />
            </ActionIcon>
          </Tooltip>
          <ListSettings />
        </Tooltip.Group>
      </Flex>
      <ShareModal opened={opened} onClose={close} centered />
    </Flex>
  );
}
