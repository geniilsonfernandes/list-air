import { Box, Divider, Space } from '@mantine/core';

import { GloceryList, ListHeader, Search } from '@/components';
import { GloceryStatus } from '../GloceryStatus/GloceryStatus';

export function Glocery() {
  return (
    <>
      <ListHeader />

      <Divider mb="xs" />
      <GloceryStatus />
      <Box
        style={{
          position: 'sticky',
          top: 54,
          zIndex: 99,
          backgroundColor: 'var(--mantine-color-body)',
        }}
      >
        <Space h="xs" />
        <Search />
        <Space h="xs" />
      </Box>

      <Box w="100%">
        <GloceryList />
      </Box>
    </>
  );
}
