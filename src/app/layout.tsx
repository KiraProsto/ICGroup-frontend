import type { Metadata } from 'next';
import './globals.css';
import { montserrat } from './fonts';
import { Providers } from './providers';
import '@mantine/core/styles.css';

export const metadata: Metadata = {
  title: 'IC Group',
  description: 'Corporate website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={montserrat.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
