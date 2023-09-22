import Divider from '@components/Atoms/Divider';
import Icon from '@components/Atoms/Icon';
import Footer from '@components/Molecules/Footer';
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
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div>
        <Navbar />
        <Divider />
        <div>{children}</div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
