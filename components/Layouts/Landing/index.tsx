import Icon from '@components/Atoms/Icon';
import Navbar from '@components/Molecules/Navbar';
import Head from 'next/head';
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
  title?: string;
};

function Layout({ children, title = 'GetLinked' }: LayoutProps) {
  // const pageTitle = `GetLinked ${title}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <hr className="border-white/20" />
        <div>{children}</div>
      </div>
    </>
  );
}

export default Layout;
