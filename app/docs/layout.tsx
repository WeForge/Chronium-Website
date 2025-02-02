import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import { Banner } from 'fumadocs-ui/components/banner';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Banner id="hello-world">Chronium Is Under Development!</Banner>
      <DocsLayout tree={source.pageTree} {...baseOptions}>
        {children}
      </DocsLayout>
    </>
  );
}
