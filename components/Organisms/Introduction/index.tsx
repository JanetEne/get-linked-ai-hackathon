import Container from '@components/Atoms/Container';
import Image from 'next/image';

const Introduction = () => {
  return (
    <div className="bg-introBg" id="overview">
      <Container className="py-14">
        <div className="lg:gap-20 gap-10  flex flex-col lg:flex-row lg:pl-26 lg:pr-20">
          <div className="lg:w-[60%] flex justify-center items-center relative">
            <Image
              src="/assets/images/The big idea.png"
              alt="the big idea"
              width={500}
              height={500}
            />
            <Image
              src="/assets/svg/swiglyline.svg"
              alt="swiglyline"
              width={50}
              height={50}
              className="lg:absolute hidden lg:flex z-10 lg:right-24 lg:-bottom-4"
            />
          </div>

          <div className="flex flex-col gap-4 mt-10 sm:mt-20 lg:w-[40%] justify-center items-center lg:items-start text-center lg:text-start ">
            <div className="font-clash flex flex-col gap-2 items-center lg:items-start text-center lg:text-start  font-extrabold lg:text-2xl text-lg mb-2">
              <p className="text-white">Introduction to getlinked</p>
              <p className="text-primary text-body">tech Hackathon 1.0</p>
            </div>
            <p className="leading-7 lg:leading-7 lg:text-sm text-xs">
              Our tech hackathon is a melting pot of visionaries, and its{' '}
              <br className="hidden lg:block" />
              purpose is as clear as day: to shape the future. Whether
              you&apos;re a coding genius, a design maverick, or a concept
              wizard, you&apos;ll have the chance to transform your ideas into
              reality. Solving real-world problems, pushing the boundaries of
              technology, and creating solutions that can change the world,
              that&apos;s what we&apos;re all about!
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Introduction;
