import type { Metadata } from 'next';

import { AppProvider } from './providers/AppProvider';

export const metadata: Metadata = {
  title: 'Globeinfo',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          {children}
          <div id="modal-root" />
          <div id="error-modal-root" />
        </AppProvider>
      </body>
    </html>
  );
}
