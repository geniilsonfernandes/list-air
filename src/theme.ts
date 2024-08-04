import { createTheme } from '@mantine/core';

export const theme = createTheme({
  /** Put your mantine theme override here */
  colors: {
    deepBlue: [
      '#eef3ff',
      '#dce4f5',
      '#b9c7e2',
      '#94a8d0',
      '#748dc1',
      '#5f7cb8',
      '#5474b4',
      '#44639f',
      '#39588f',
      '#2d4b81',
    ],
    blackAlpha: [
      'rgba(0, 0, 0, 0)',
      'rgba(0, 0, 0, 0.01)',
      'rgba(0, 0, 0, 0.02)',
      'rgba(0, 0, 0, 0.03)',
      'rgba(0, 0, 0, 0.04)',
      'rgba(0, 0, 0, 0.05)',
      'rgba(0, 0, 0, 0.06)',
      'rgba(0, 0, 0, 0.07)',
      'rgba(0, 0, 0, 0.08)',
      'rgba(0, 0, 0, 0.09)',
    ],
  },

  primaryColor: 'orange',
});
