import { Box, Divider } from '@mantine/core';

import { GloceryList, ListHeader, Search } from '@/components';
import { GloceryStatus } from '../GloceryStatus/GloceryStatus';

export function Glocery() {
  return (
    <>
      <Box
        py="xs"
        style={{
          position: 'sticky',
          top: 54,
          zIndex: 99,
          backgroundColor: 'var(--mantine-color-body)',
        }}
      >
        <ListHeader />

        <Divider my="xs" />
        <GloceryStatus />
        <Search />
      </Box>

      <Box w="100%">
        <GloceryList />
      </Box>
    </>
  );
}
