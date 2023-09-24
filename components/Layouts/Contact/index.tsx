import Icon from '@components/Atoms/Icon';
import Navbar from '@components/Molecules/Navbar';
import Head from 'next/head';
import Image from 'next/image';
import React, { ReactNode } from 'react';

type AuthProps = {
  children: ReactNode;
  title?: string;
};

const ContactLayout = ({ children, title }: AuthProps) => {
  const pageTitle = `GetLinked - ${title}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Navbar show={false} colorText={true} />
      <div className="grid lg:grid-cols-[45%_55%] h-full lg:px-12 lg:py-12">
        <div className="justify-center hidden lg:flex items-center relative">
          <span className="absolute -top-12 -left-12 h-full w-full">
            <Image
              src={'/assets/svg/purpleFlare.svg'}
              alt="background frames"
              layout="fill"
              objectFit="contain"
            />
          </span>
          <div className="flex items-start gap-4 flex-col absolute z-30">
            <p className="text-primary font-semibold text-[32px] font-clash">
              Get In Touch
            </p>
            <p>
              Contact <br className="hidden lg:block" />
              Information
            </p>
            <p>
              27,Alara Street <br className="hidden lg:block" />
              Yaba 100012 <br className="hidden lg:block" />
              Lagos State
            </p>
            <p>Call Us : 07067981819</p>
            <p>
              we are open from Monday-Friday <br className="hidden lg:block" />
              08:00am - 05:00pm
            </p>
            <p className="text-primary">Share on</p>
            <div className="flex gap-x-4 items-center mt-[2px]">
              <a
                href={
                  'https://instagram.com/getlinked.ai?igshid=MzRlODBiNWFlZA=='
                }
                rel="noreferrer"
                target="_blank"
              >
                <Icon icon="Instagram" className="w-5 h-5" />
              </a>
              <a
                href={'https://twitter.com/getLinkedai'}
                rel="noreferrer"
                target="_blank"
              >
                <Icon icon="X" />
              </a>
              <a href={'#'}>
                <Icon icon="Facebook" />
              </a>
              <a
                href={'https://www.linkedin.com/company/getlinked-ai/'}
                rel="noreferrer"
                target="_blank"
              >
                <Icon icon="LinkedIn" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex md:justify-center 2xl:justify-start md:items-center">
          <div className=" w-full xl:mx-28 md:max-w-[700px] lg:max-w-none mx-0 py-10 h-screen md:h-fit relative">
            {/* <span className="absolute h-full -bottom-12 -right-[10rem] w-full">
              <Image
                src={'/assets/images/purpleLensContact.jpg'}
                alt="background frames"
                layout="fill"
                objectFit="cover"
              />
            </span> */}
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactLayout;
