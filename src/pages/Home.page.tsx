import { Container, Input } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useState } from 'react';

import { ListHeader } from '@/components';

export function HomePage() {
  const [value, setValue] = useState('Clear me');
  return (
    <Container>
      {/* <ColorSchemeToggle /> */}
      <ListHeader />

      <Input
        placeholder="Procurar produtos"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        rightSectionPointerEvents="all"
        mt="md"
        size="md"
        radius="xl"
        variant="filled"
        leftSection={<IconSearch size={14} />}
      />
    </Container>
  );
}
