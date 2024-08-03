import { Box, Flex, FlexProps } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

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
          style={{
            borderRight: '1px solid var(--mantine-color-gray-2)',
          }}
          w={{
            base: '300px',
          }}
          p="md"
        >
          {sidebar}
        </Box>
      )}
      <Box p="md" flex="1" pos="relative">
        {children}
      </Box>
    </Flex>
  );
}
