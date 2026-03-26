import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';
import './global.css';

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Aisten',
    template: '%s | Aisten',
  },
  description: '播客学语言（Aisten）文档站，包含开始指南、常见问题与更新日志。',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="zh-CN"
      className={manrope.className}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body>
        <RootProvider>
          <DocsLayout tree={source.getPageTree()} {...baseOptions()}>
            {children}
          </DocsLayout>
        </RootProvider>
      </body>
    </html>
  );
}
