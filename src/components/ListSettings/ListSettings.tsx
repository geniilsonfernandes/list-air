import { ActionIcon, Menu } from '@mantine/core';
import { IconCopy, IconDotsVertical, IconEdit, IconTrash } from '@tabler/icons-react';

export function ListSettings() {
  return (
    <Menu shadow="md" width={200} trigger="click-hover">
      <Menu.Target>
        <ActionIcon variant="default" aria-label="Settings" size="lg">
          <IconDotsVertical size={14} />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Ações</Menu.Label>
        <Menu.Item leftSection={<IconEdit size={14} />}>Renomear</Menu.Item>
        <Menu.Item leftSection={<IconCopy size={14} />}>Criar uma copia</Menu.Item>
        <Menu.Divider />
        <Menu.Item color="red" leftSection={<IconTrash size={14} />}>
          Apagar lista
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
