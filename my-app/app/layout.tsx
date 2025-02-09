import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Enterprise Solutions - Transform Your Business',
  description: 'Leading enterprise solutions provider helping businesses transform digitally with cutting-edge technology and expert consulting services.',
  openGraph: {
    title: 'Enterprise Solutions - Transform Your Business',
    description: 'Leading enterprise solutions provider helping businesses transform digitally with cutting-edge technology and expert consulting services.',
    url: 'https://enterprise-solutions.com',
    siteName: 'Enterprise Solutions',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
        width: 1200,
        height: 630,
        alt: 'Enterprise Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Enterprise Solutions',
              url: 'https://enterprise-solutions.com',
              logo: 'https://enterprise-solutions.com/logo.png',
              description: 'Leading enterprise solutions provider helping businesses transform digitally.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '123 Business Avenue',
                addressLocality: 'San Francisco',
                addressRegion: 'CA',
                postalCode: '94105',
                addressCountry: 'US',
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}