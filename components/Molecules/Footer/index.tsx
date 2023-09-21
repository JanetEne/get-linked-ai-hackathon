import Container from '@components/Atoms/Container';
import Icon from '@components/Atoms/Icon';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Footer = () => {
  const router = useRouter();
  const pathName = router.pathname;

  const navRoute = (item: string) => {
    if (pathName !== '/' && item === 'individual') {
      return '/#individual';
    } else if (pathName !== '/' && item === 'business') {
      return '/#business';
    }
    return `#${item}`;
  };

  return (
    <div className="bg-footerBg">
      <Container className="pt-20 pb-16 lg:px-12 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-20 lg:gap-0 w-fit mx-auto ">
          <div>
            <div className="left-section flex flex-col gap-6 items-start">
              <Link href="/">
                <p className="font-clash text-xl lg:text-3xl font-bold">
                  get<span className="text-primary">linked</span>
                </p>
              </Link>
              <p className="text-xs text-start leading-7">
                Getlinked Tech Hackathon is a technology innovation program
                established by a group of organizations with the aim of
                showcasing young and talented individuals in the field of
                technology
              </p>
              <p className="flex gap-x-3 text-xs mt-10 items-center">
                Terms of Use
                <span className="border-primary border-r border-[2px] h-5"></span>
                Privacy Policy
              </p>
            </div>
          </div>
          <div className="w-fit text-start lg:mx-auto">
            <h5 className="font-semibold text-sm text-primary">Useful Links</h5>
            <ul className="flex flex-col gap-6 mt-4">
              <Link href={`${navRoute('overview')}`}>
                <p className="text-xs cursor-pointer">Overview</p>
              </Link>
              <Link href={`${navRoute('timeline')}`}>
                <p className="text-xs cursor-pointer">Timeline</p>
              </Link>
              <Link href={`${navRoute('faqs')}`}>
                <p className="text-xs cursor-pointer">FAQs</p>
              </Link>
              <Link href="/auth/regster">
                <p className="text-xs cursor-pointer">Register</p>
              </Link>
            </ul>
            <div className="flex gap-x-4 items-center mt-6">
              <p className="text-xs text-primary">Follow us</p>
              <a
                href={'https://linkedin.com/truparse'}
                rel="noreferrer"
                target="_blank"
              >
                <Icon icon="Instagram" className="w-5 h-5" />
              </a>
              <a
                href={'https://linkedin.com/truparse'}
                rel="noreferrer"
                target="_blank"
              >
                <Icon icon="X" />
              </a>
              <a
                href={'https://linkedin.com/truparse'}
                rel="noreferrer"
                target="_blank"
              >
                <Icon icon="Facebook" />
              </a>
              <a
                href={'https://linkedin.com/truparse'}
                rel="noreferrer"
                target="_blank"
              >
                <Icon icon="LinkedIn" className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="w-fit text-start lg:mx-auto">
            <h5 className="font-semibold text-sm text-primary">Contact Us</h5>
            <div className="flex flex-col gap-6 mt-4">
              <div className="flex gap-4 items-center">
                <Icon icon="Contact" />
                <p className="text-xs">+234 6707653444</p>
              </div>
              <div className="flex gap-4 items-center xl:pr-32">
                <Icon icon="Location" />
                <p className="text-xs">
                  27,Alara Street Yaba 100012 Lagos State
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-xs text-center mt-14">
          All rights reserved. © getlinked Ltd.
        </p>
      </Container>
    </div>
  );
};

export default Footer;
