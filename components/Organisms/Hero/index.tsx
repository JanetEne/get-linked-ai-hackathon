import Button from '@components/Atoms/Button';
import Container from '@components/Atoms/Container';
import Icon from '@components/Atoms/Icon';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  return (
    <Container className="pt-14 lg:pb-14 ">
      <div className="relative">
        <p className="flex lg:justify-end lg:text-4xl text-md justify-center text-center lg:text-end font-bold italic mb-12 lg:mb-[8rem]">
          Igniting a Revolution in HR Innovation
        </p>
        <Image
          width={250}
          height={250}
          src={'/assets/svg/pinkline.svg'}
          alt="pink line"
          className="hidden lg:absolute lg:flex right-2 top-10"
        />
      </div>

      <div className="lg:gap-20 gap-10 flex flex-col lg:flex-row">
        <div className="flex flex-col gap-4 lg:w-[50%] xl:pl-16 justify-center items-center lg:items-start text-center lg:text-start">
          <div className="font-clash flex flex-col gap-2 items-center justify-center lg:items-start text-center lg:text-start font-extrabold xl:text-[80px] lg:text-5xl xl:leading-[74px] lg:leading-[50px] leading-[28px] text-[32px] mb-2">
            <p className="relative">
              getlinked Tech
              <span>
                <Image
                  width={50}
                  height={50}
                  src={'/assets/svg/bulb.svg'}
                  alt="pink line"
                  className="hidden lg:absolute right-[2rem] -top-[3.5rem] lg:block"
                />
              </span>
            </p>
            <p className="flex">
              Hackathon<span className="text-primary">1.0</span>
              <span>
                <Icon icon="Chain" />
              </span>
              <span>
                <Icon icon="Lightwork" />
              </span>
            </p>
          </div>
          <p className="lg:text-lg text-xs leading-7">
            Participate in getlinked tech Hackathon 2023 stand{' '}
            <br className="hidden lg:block" /> a chance to win a Big prize
          </p>

          <div className="lg:w-[25%] w-[50%] mt-4">
            <Button label="Register" />
          </div>
          <div className="font-unica flex gap-6 lg:text-[64px] text-5xl mt-10">
            <p>
              00
              <span className="text-sm font-montserrat">H</span>
            </p>
            <p>
              00
              <span className="text-sm font-montserrat">M</span>
            </p>
            <p>
              00
              <span className="text-sm font-montserrat">S</span>
            </p>
          </div>
        </div>
        <div className="lg:w-[50%] lg:relative">
          <Image
            src="/assets/svg/world.svg"
            alt="world"
            width={500}
            height={500}
            className="lg:absolute hidden lg:flex z-10 lg:right-0 lg:-top-14"
          />
          <Image
            src="/assets/images/man-hands-out.png"
            alt="the big idea"
            width={700}
            height={700}
            className="lg:absolute static lg:-right-[4.25rem] lg:-bottom-14"
          />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
