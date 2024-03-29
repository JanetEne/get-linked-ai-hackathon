import Button from '@components/Atoms/Button';
import Container from '@components/Atoms/Container';
import Icon from '@components/Atoms/Icon';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react';

interface INavBar {
  show?: boolean;
  colorText?: boolean;
}

const Navbar: FC<INavBar> = ({ show = true, colorText = false }) => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const router = useRouter();
  const pathName = router.pathname;

  const navRoute = (item: string) => {
    if (pathName !== '/' && item === 'timeline') {
      return '/#timeline';
    } else if (pathName !== '/' && item === 'faqs') {
      return '/#faqs';
    } else if (pathName !== '/' && item === 'overview') {
      return '/#overview';
    }
    return `#${item}`;
  };

  useEffect(() => {
    window.onscroll = () => navScroll();
  }, []);

  const navScroll = () => {
    const navbar = window.document.querySelector('#navbar');
    const layoutContentContainer = window.document.querySelector(
      '#layout_content_container'
    );
    const bodyContainer = window.document.querySelector('#body-container');
    if (
      document.body.scrollTop > 250 ||
      document.documentElement.scrollTop > 250
    ) {
      navbar?.classList.add('fixed');
      navbar?.classList.remove('relative');
      navbar?.classList.add('shadow-lg');
    } else {
      navbar?.classList.remove('fixed');
      navbar?.classList.add('relative');
      navbar?.classList.remove('shadow-lg');
      navbar?.classList.add('z-[100]');
      navbar?.classList.add('bg-background');
    }
  };

  return (
    <nav
      id="navbar"
      className={`${!show ? 'lg:block hidden' : 'block'} pb-6 pt-10 w-full`}
    >
      <Container className="w-full flex items-center justify-between">
        <div className="flex justify-between items-center max-w-[1100px] w-full mr-8 ">
          <Link href="/">
            <p className="font-clash text-2xl lg:text-3xl xl:text-4xl font-bold">
              get<span className="text-primary">linked</span>
            </p>
          </Link>

          <div className="hidden md:flex items-center gap-3">
            <Link href={`${navRoute('timeline')}`}>
              <p className="py-2 px-4 text-body cursor-pointer">Timeline</p>
            </Link>
            <Link href={`${navRoute('overview')}`}>
              <p className="py-2 px-4 text-body cursor-pointer">Overview</p>
            </Link>
            <Link href={`${navRoute('faqs')}`}>
              <p className="py-2 px-4 text-body cursor-pointer">FAQs</p>
            </Link>
            <Link href="/contact">
              <p
                className={`${
                  colorText
                    ? 'bg-gradient-to-r from-secondary from-3% to-tetiary to-93% text-transparent bg-clip-text'
                    : 'text-white'
                } py-2 px-4 text-body cursor-pointer`}
              >
                Contact
              </p>
            </Link>
          </div>
        </div>

        <div
          className={`max-w-[280px] sm:max-w-[220px] w-[170px] hidden md:block`}
        >
          <Link href="/auth/register">
            <Button label="Register" />
          </Link>
        </div>

        <span className="block md:hidden" onClick={() => setToggleMenu(true)}>
          <Icon icon="Menu" />
        </span>
        <div
          className={`${
            toggleMenu
              ? 'flex flex-col fixed top-0 right-0 z-50 w-full md:w-fit bg-background pt-8 pb-12 px-4 md:block animate-appear'
              : 'hidden md:block'
          }`}
        >
          <div className="flex flex-col gap-4">
            <div className="md:hidden flex justify-end">
              <div
                className="p-[1.5px] rounded-full w-5 h-5 bg-gradient-to-r flex items-center justify-center from-secondary via-primary to-tetiary"
                onClick={() => setToggleMenu(false)}
              >
                <div className="h-full w-full rounded-full bg-background flex items-center justify-center">
                  <Icon icon="Close" className="w-2 h-2" />
                </div>
              </div>
            </div>

            <div className="md:hidden flex flex-col gap-4 text-md mb-4 font-inter">
              <Link href={`${navRoute('timeline')}`}>
                <p className="text-body cursor-pointer">Timeline</p>
              </Link>
              <Link href={`${navRoute('overview')}`}>
                <p className="text-body cursor-pointer">Overview</p>
              </Link>
              <Link href={`${navRoute('faqs')}`}>
                <p className="text-body cursor-pointer">FAQs</p>
              </Link>
              <Link href="/contact">
                <p className="text-body cursor-pointer">Contact</p>
              </Link>
              <div className={`max-w-[280px] sm:max-w-[220px] w-[170px]`}>
                <Link href="/auth/register">
                  <Button label="Register" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
