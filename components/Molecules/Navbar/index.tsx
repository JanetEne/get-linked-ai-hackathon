import Button from '@components/Atoms/Button';
import Container from '@components/Atoms/Container';
import Icon from '@components/Atoms/Icon';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const router = useRouter();
  const pathName = router.pathname;

  const navRoute = (item: string) => {
    if (pathName !== '/' && item === 'timeline') {
      return '/#timeline';
    } else if (pathName !== '/' && item === 'faqs') {
      return '/#faqs';
    }
    return `#${item}`;
  };

  return (
    <nav id="navbar" className="pb-6 pt-10 w-full">
      <Container className="w-full flex items-center justify-between">
        <div className="flex justify-between items-center max-w-[1100px] w-full mr-8 ">
          <Link href="/">
            <Icon
              icon="Getlinked"
              className="w-[124px] h-[37px] cursor-pointer"
            />
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
              <p className="py-2 px-4 text-body cursor-pointer">Contact</p>
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
              ? 'flex flex-col absolute md:static top-0 right-0 z-50 w-full md:w-fit bg-background pt-8 pb-12 px-4 md:block animate-appear'
              : 'hidden md:block'
          }`}
        >
          <div className="flex flex-col gap-4">
            <div className="md:hidden flex justify-end">
              <div
                className="p-[1.5px] rounded-full w-5 h-5 bg-gradient-to-r flex items-center justify-center from-secondary via-primary to-[#FE34B9]"
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
