import Navbar from '@components/Molecules/Navbar';
import Head from 'next/head';
import Image from 'next/image';
import React, { ReactNode } from 'react';

type AuthProps = {
  children: ReactNode;
  title?: string;
};

const AuthLayout = ({ children, title }: AuthProps) => {
  const pageTitle = `GetLinked - ${title}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Navbar show={false} />
      <div className="grid lg:grid-cols-[45%_55%] h-full lg:px-6">
        <p className="text-primary font-semibold flex items-start px-[1rem] pt-4 lg:hidden font-clash text-2xl">
          Register
        </p>
        <div className="flex items-center justify-center flex-col">
          <Image
            alt="auth Image"
            src="/assets/images/register.png"
            width={550}
            height={550}
          />
        </div>
        <div className="flex md:justify-center 2xl:justify-start md:items-center">
          <div className=" w-full xl:mx-16 md:max-w-[700px] lg:max-w-none mx-0 py-10 h-screen md:h-fit relative">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
