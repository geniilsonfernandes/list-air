import { Box, Divider } from '@mantine/core';

import { GloceryList, ListHeader, Search } from '@/components';

export function Glocery() {
  return (
    <>
      <Box
        p="md"
        style={{
          position: 'sticky',
          top: 69,
          zIndex: 99,
          backgroundColor: 'var(--mantine-color-default)',
        }}
      >
        <ListHeader />

        <Divider my="md" />
        <Search />
      </Box>

      <Box px="md" w="100%" pt="70">
        <GloceryList />
      </Box>
    </>
  );
}
