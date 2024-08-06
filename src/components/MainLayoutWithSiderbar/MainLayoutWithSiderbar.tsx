import { Box, Flex, FlexProps } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import classes from './MainLayoutWithSiderbar.module.css';

type MainLayoutWithSiderbarProps = {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
} & FlexProps;

export function MainLayoutWithSiderbar({
  children,
  sidebar,
  ...props
}: MainLayoutWithSiderbarProps) {
  const matches = useMediaQuery('(min-width: 56.25em)');

  return (
    <Flex flex={1} pos="relative" {...props}>
      {matches && (
        <Box
          className={classes.sidebar}
          w={{
            base: '300px',
          }}
          py="xs"
          px="sm"
          h="calc(100vh - 54px)"
          style={{
            position: 'sticky',
            top: 54,
            zIndex: 99,
            backgroundColor: 'var(--mantine-color-default)',
          }}
        >
          {sidebar}
        </Box>
      )}

      {/* <ScrollArea w="100%" h={cssToken.safeAreaHeightWithoutList}> */}
      <Box pos="relative" px="sm" flex="1" className={classes.main}>
        {children}
      </Box>
      {/* </ScrollArea> */}
    </Flex>
  );
}
