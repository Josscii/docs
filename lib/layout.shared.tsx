import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { ArrowDownToLineIcon, MailIcon } from 'lucide-react';
import { Brand } from '@/components/docs/brand';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <Brand />,
      url: '/',
    },
    links: [
      {
        icon: <MailIcon />,
        text: '支持',
        url: 'mailto:jossciiweiyi@gmail.com',
        secondary: true,
        active: 'none',
      },
      {
        icon: <ArrowDownToLineIcon />,
        text: '下载',
        url: 'https://apps.apple.com/us/app/aisten-podcast-transcription/id6453694910?platform=iphone',
        active: 'none',
      },
    ],
  };
}
