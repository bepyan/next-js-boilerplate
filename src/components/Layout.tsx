import { cls } from '@libs/client';
import Head from 'next/head';

export interface LayoutProps {
  className?: string;
  children?: React.ReactNode;
  title?: string;
}

const WEBSITE_TITLE = 'NextJS Boilerplate';

export default function Layout({ className, children, title }: LayoutProps) {
  const titlePrefix = title ? `${title} | ` : '';

  return (
    <>
      <Head>
        <title>{`${titlePrefix}${WEBSITE_TITLE}`}</title>
      </Head>

      <div className={cls(className)}>{children}</div>
    </>
  );
}
