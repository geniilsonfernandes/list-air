import { Box, Divider } from '@mantine/core';

import { GloceryList, ListHeader, Search } from '@/components';
import { GloceryStatus } from '../GloceryStatus/GloceryStatus';

export function Glocery() {
  return (
    <>
      <Box
        p="md"
        pb="xs"
        style={{
          position: 'sticky',
          top: 50,
          zIndex: 99,
          backgroundColor: 'var(--mantine-color-body)',
        }}
      >
        <ListHeader />

        <Divider mt="md" mb="xs" />
        <GloceryStatus />
        <Search />
      </Box>

      <Box px="md" w="100%">
        <GloceryList />
      </Box>
    </>
  );
}
