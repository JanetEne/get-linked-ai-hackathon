import Container from '@components/Atoms/Container';
import Image from 'next/image';
import React from 'react';

const PartnersAndSponsors = () => {
  return (
    <Container className="py-20">
      <div className="gap-12 flex flex-col lg:px-[6rem] justify-center relative">
        {/* <span className="absolute h-full w-full">
          <Image
            src={'/assets/svg/purpleLensPartners.svg'}
            alt="background"
            layout="fill"
            objectFit="contain"
          />
        </span> */}
        <div className="gap-6 flex flex-col lg:px-[12rem] xl:px-[22rem] text-center items-center ">
          <p className="leading-[1] font-clash font-extrabold lg:text-2xl text-lg">
            Partners and Sponsors
          </p>
          <p className="lg:text-sm text-xs leading-7 lg:leading-7">
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </div>
        <div className="border-[1px] border-primary lg:py-[8rem] lg:px-[4rem] px-[2rem] py-[2rem] rounded-md flex justify-center items-center">
          <Image
            alt="partners and sponsors"
            src="/assets/images/Partner and Sponsors.png"
            width={700}
            height={700}
          />
        </div>
      </div>
    </Container>
  );
};

export default PartnersAndSponsors;
