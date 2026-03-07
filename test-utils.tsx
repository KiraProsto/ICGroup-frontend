import { MantineProvider } from '@mantine/core';
import { ReactNode } from 'react';

export function renderWithMantine(ui: ReactNode) {
  return <MantineProvider>{ui}</MantineProvider>;
}
