import { rem, Switch, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { IconMoonStars, IconSun } from '@tabler/icons-react';

export function ColorSchemeToggle() {
  const theme = useMantineTheme();
  const { setColorScheme, colorScheme } = useMantineColorScheme();

  const sunIcon = (
    <IconSun
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.yellow[4]}
    />
  );

  const moonIcon = (
    <IconMoonStars
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.blue[6]}
    />
  );

  return (
    <Switch
      checked={colorScheme === 'dark'}
      onChange={() => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')}
      size="md"
      color="dark.4"
      onLabel={sunIcon}
      offLabel={moonIcon}
    />
  );
}
