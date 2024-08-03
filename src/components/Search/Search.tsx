import {
  Box,
  BoxProps,
  Card,
  Divider,
  Input,
  ScrollArea,
  SimpleGrid,
  Space,
  Transition,
} from '@mantine/core';
import { useClickOutside, useDisclosure } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';

import useSearchStore from '@/store/useSearchStore';
import classes from './Search.module.css';
import { SearchableItem } from './SearchableItem';

export function Search(props: BoxProps) {
  const ref = useClickOutside(() => close());
  const [opened, { open, close }] = useDisclosure(false);
  const { search, searchList, handleSearch, handleSelect, checkIfSelected } = useSearchStore(
    (state) => ({
      search: state.search,
      searchList: state.searchList,
      itemsSelected: state.itemsSelected,
      handleSearch: state.handleSearch,
      handleSelect: state.handleSelect,
      checkIfSelected: state.checkIfSelected,
    })
  );

  return (
    <Box pos="relative" {...props}>
      <Input
        placeholder="Procurar produtos"
        rightSectionPointerEvents="all"
        radius="md"
        variant="filled"
        onFocus={open}
        onChange={(e) => handleSearch(e.target.value)}
        value={search}
        // rightSection={<Loader size="xs" />}
        leftSection={<IconSearch size={16} />}
        className={classes.searchInput}
      />

      <Transition mounted={opened} transition="fade" duration={200} timingFunction="ease">
        {(styles) => (
          <Card
            p={10}
            style={styles}
            className={classes.results}
            radius="md"
            shadow="sm"
            withBorder
            ref={ref}
          >
            <Space h="44px" />
            <Divider />
            <ScrollArea h={300} pt={10}>
              <SimpleGrid cols={1} spacing="xs">
                {searchList.length === 0 && (
                  <SearchableItem
                    name={search}
                    selected={checkIfSelected(search)}
                    onSelect={() => handleSelect(search)}
                  />
                )}
                {searchList.map((name, index) => (
                  <SearchableItem
                    name={name}
                    isLoading
                    key={index}
                    selected={checkIfSelected(name)}
                    onSelect={() => handleSelect(name)}
                  />
                ))}
              </SimpleGrid>
            </ScrollArea>
          </Card>
        )}
      </Transition>
    </Box>
  );
}
