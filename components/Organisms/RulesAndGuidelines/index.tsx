import Container from '@components/Atoms/Container';
import Image from 'next/image';
import React from 'react';

const RulesAndGuidelines = () => {
  return (
    <Container className="pb-20">
      <div className="lg:gap-20 gap-10 flex flex-col lg:flex-row lg:px-20">
        <div className="flex flex-col gap-4 lg:w-[50%] xl:pl-16 justify-center items-center lg:items-start text-center lg:text-start order-2 lg:order-1">
          <div className="font-clash flex flex-col gap-2 items-center lg:items-start text-center lg:text-start font-extrabold lg:text-2xl text-lg mb-2">
            <p className="text-white leading-[1]">Rules and</p>
            <p className="text-primary text-body">Guidelines</p>
          </div>
          <p className="lg:text-sm text-xs leading-7">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you&apos;re a
            coding genius, a design maverick, or a concept wizard, you&apos;ll
            have the chance to transform your ideas into reality. Solving
            real-world problems, pushing the boundaries of technology, and
            creating solutions that can change the world, that&apos;s what
            we&apos;re all about!
          </p>
        </div>

        <div className="lg:w-[50%] flex justify-center items-center order-1 lg:order-2">
          <Image
            src="/assets/images/rules-and-guidelines.png"
            alt="the big idea"
            width={600}
            height={600}
          />
        </div>
      </div>
    </Container>
  );
};

export default RulesAndGuidelines;
