import { Box, Container, Divider, Flex } from '@mantine/core';

import { ListHeader, MainLayoutWithSiderbar, Siderbar } from '@/components';
import { Search } from '@/components/Search/Search';

export function HomePage() {
  return (
    <Container h="100vh">
      <Flex direction="column" h="100%">
        <Box
          p="md"
          style={{
            borderBottom: '1px solid var(--mantine-color-gray-2)',
          }}
        >
          ...
        </Box>
        <MainLayoutWithSiderbar sidebar={<Siderbar />}>
          <ListHeader />
          <Divider my="md" style={{ borderColor: 'var(--mantine-color-gray-2)' }} />
          <Search mt="lg" />
        </MainLayoutWithSiderbar>
      </Flex>
    </Container>
  );
}
