import { Box, Text, Title } from '@mantine/core';

import classes from './ListButton.module.css';

export function ListButton() {
  return (
    <Box p="xs" ta="left" className={classes.main}>
      <Title order={5}>Jul 31 Shopping List</Title>
      <Text size="xs" c="dimmed">
        10 itens
      </Text>
    </Box>
  );
}
