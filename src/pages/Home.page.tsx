import { Avatar, Container, Group, Indicator } from '@mantine/core';

import { ColorSchemeToggle, Glocery, MainLayoutWithSiderbar, Siderbar } from '@/components';

export function HomePage() {
  return (
    <Container>
      <Group
        px="md"
        h={56}
        style={{
          borderBottom: '1px solid var(--mantine-color-gray-2)',
          position: 'sticky',
          top: 0,
          zIndex: 99,
          backgroundColor: 'var(--mantine-color-default)',
        }}
      >
        <ColorSchemeToggle />
        <Indicator size={14} withBorder processing>
          <Avatar
            size="sm"
            radius="sm"
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
          />
        </Indicator>
      </Group>
      <MainLayoutWithSiderbar sidebar={<Siderbar />}>
        <Glocery />
      </MainLayoutWithSiderbar>
    </Container>
  );
}
