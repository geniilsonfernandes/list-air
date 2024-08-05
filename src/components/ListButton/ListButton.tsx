import { Box, Text, Title } from '@mantine/core';

import classes from './ListButton.module.css';

export function ListButton() {
  return (
    <Box p="xs" ta="left" className={classes.main}>
      <Title order={6}>Jul 31 Shopping List</Title>
      <Text size="xs">10 itens</Text>
    </Box>
  );
}
