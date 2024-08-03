import { Box, Container, Divider, Flex, Input, Text } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useState } from 'react';

import { ListHeader, MainLayoutWithSiderbar, Siderbar } from '@/components';

export function HomePage() {
  const [value, setValue] = useState('Clear me');
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
          <Input
            placeholder="Procurar produtos"
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
            rightSectionPointerEvents="all"
            mt="md"
            radius="md"
            variant="filled"
            leftSection={<IconSearch size={14} />}
          />
          {Array.from({ length: 230 }).map((_, index) => (
            <Text key={index}>{index}</Text>
          ))}
          <Box
            p="md"
            top={0}
            w="100%"
            variant=""
            style={{
              backdropFilter: 'blur(5px)',
              borderRadius: '4px',
              border: '1px solid var(--mantine-color-gray-2)',
            }}
          >
            ...
          </Box>
        </MainLayoutWithSiderbar>
      </Flex>
    </Container>
  );
}
