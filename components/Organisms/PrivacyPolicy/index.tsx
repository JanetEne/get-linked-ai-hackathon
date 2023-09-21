import Button from '@components/Atoms/Button';
import Container from '@components/Atoms/Container';
import Icon from '@components/Atoms/Icon';
import Image from 'next/image';
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <Container className="py-20">
      <div className="lg:gap-20 gap-10 flex flex-col lg:flex-row lg:px-20">
        <div className="flex flex-col lg:w-[50%]">
          <div className="font-clash flex flex-col gap-2 items-center lg:items-start text-center lg:text-start font-extrabold lg:text-2xl text-lg lg:mb-4 mb-2">
            <p className="text-white leading-[1]">Privacy Policy and</p>
            <p className="text-primary text-body">Terms</p>
          </div>
          <p className="lg:text-sm text-xs leading-7 text-center lg:text-start mb-4">
            Last updated on September 12, 2023
          </p>
          <p className="lg:text-sm text-xs leading-7 text-center lg:text-start">
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant
          </p>
          <div className="border-[1px] lg:text-sm text-xs border-primary rounded-md flex flex-col px-14 py-12 mt-6">
            <p className="leading-8 mb-8 text-center lg:text-start ">
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
            <p className="text-primary font-bold mb-4">Licensing Policy</p>
            <p className="font-bold mb-8">
              Here are terms of our Standard License:
            </p>
            <div className="grid md:grid-cols-[5%_95%] grid-cols-[10%_90%] gap-2 mb-4">
              <Icon icon="CheckCircle" className="w-4 h-4 mt-2 lg:mt-1" />
              <p className="lg:text-sm text-xs leading-7">
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </p>
            </div>
            <div className="grid md:grid-cols-[5%_95%] grid-cols-[10%_90%] gap-2 mb-4">
              <Icon icon="CheckCircle" className="w-4 h-4 mt-2 lg:mt-1" />
              <p className="lg:text-sm text-xs leading-7">
                You are licensed to use the item available at any free source
                sites, for your project developement
              </p>
            </div>
            <div className="mt-6 justify-center items-center flex">
              <div className="w-1/2">
                <Button label="Read More" />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-[50%]">
          <Image
            src="/assets/images/privacy.png"
            alt="privacy policy"
            width={500}
            height={500}
          />
        </div>
      </div>
    </Container>
  );
};

export default PrivacyPolicy;
