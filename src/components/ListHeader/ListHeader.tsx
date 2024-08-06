import { ActionIcon, Box, Flex, Title, Tooltip } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconPrinter, IconSend, IconShare } from '@tabler/icons-react';

import { ListSettings, SharedUsersIcons, ShareModal } from '@/components';

export function ListHeader() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Flex align="center" justify="space-between" py="xs">
      <Box>
        <Title order={5}>List Header</Title>
      </Box>
      <Flex align="center" gap="xs">
        <SharedUsersIcons
          users={[
            { name: 'Genilson1', image: 'https://i.pravatar.cc/150?img=1' },
            { name: 'Genilson2', image: 'https://i.pravatar.cc/150?img=2' },
            { name: 'Genilson3', image: 'https://i.pravatar.cc/150?img=3' },
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

          <Tooltip label="Enviar" withArrow>
            <ActionIcon variant="default" aria-label="Print" size="lg">
              <IconSend size={14} />
            </ActionIcon>
          </Tooltip>
          <ListSettings />
        </Tooltip.Group>
      </Flex>
      <ShareModal opened={opened} onClose={close} centered />
    </Flex>
  );
}
