import { Flex, Stack, Text } from '@mantine/core';
import { IconCheck, IconTrash } from '@tabler/icons-react';
import {
  LeadingActions,
  Type as ListType,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
import clases from './GloceryList.module.css';

import { GloceryItem } from './GloceryItem';

import { useGloceryModalStore } from '@/store';

export function GloceryList() {
  const { onOpen } = useGloceryModalStore((state) => state);
  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => console.info('swipe action triggered')}>
        <Flex align="center" justify="center" bg="var(--mantine-primary-color-filled)">
          <IconCheck size={22} color="white" width={100} />
        </Flex>
      </SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => console.info('swipe action triggered')}>
        <Flex align="center" justify="center" bg="red.5">
          <IconTrash size={22} color="white" width={100} />
        </Flex>
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <Stack p="xs" align="stretch" gap="xs" className={clases.gloceryList}>
      <SwipeableList type={ListType.IOS} threshold={0.5}>
        {Array.from({ length: 100 }).map((_, index) => (
          <SwipeableListItem
            key={index}
            className={clases.glocerySwipe}
            leadingActions={leadingActions()}
            trailingActions={trailingActions()}
            onClick={() =>
              onOpen({
                name: 'Bread',
                value: '1',
                unit: 'kg',
                amount: '1',
              })
            }
          >
            <GloceryItem />
          </SwipeableListItem>
        ))}
      </SwipeableList>

      <Text c="dimmed" size="sm">
        Categories
      </Text>
    </Stack>
  );
}
