import type { Metadata } from 'next';

import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';

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
          <Header />
          {children}
          <Footer />
          <div id="modal-root" />
          <div id="error-modal-root" />
        </AppProvider>
      </body>
    </html>
  );
}
