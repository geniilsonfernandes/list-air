import { Box, Container } from '@mantine/core';

import { ColorSchemeToggle, Glocery, MainLayoutWithSiderbar, Siderbar } from '@/components';

export function HomePage() {
  return (
    <Container>
      <Box
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
      </Box>
      <MainLayoutWithSiderbar sidebar={<Siderbar />}>
        <Glocery />
      </MainLayoutWithSiderbar>
    </Container>
  );
}
