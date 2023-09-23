import Container from '@components/Atoms/Container';
import Image from 'next/image';
import React from 'react';

const PricesAndRewards = () => {
  return (
    <div className="bg-introBg">
      <Container className="py-20">
        <div className="lg:gap-20 gap-10 flex lg:flex-row flex-col lg:px-20">
          <div className="lg:w-[40%] flex justify-center flex-col items-center">
            <div className="block lg:hidden ">
              <div className="font-clash flex flex-col gap-2 items-center lg:items-start text-center lg:text-start font-extrabold md:text-2xl text-lg mb-2">
                <p className="text-white leading-[1]">Prizes and</p>
                <p className="text-primary">Rewards</p>
              </div>
              <p className="md:text-sm text-xs text-center lg:text-start leading-7 lg:pb-16 pb-6">
                Highlight of the prizes or rewards for winners and for{' '}
                <br className="hidden lg:block" />
                participants.
              </p>
            </div>
            <Image
              src="/assets/images/awards.png"
              alt="awards"
              width={600}
              height={600}
            />
          </div>

          <div className="flex md:flex-col items-center lg:items-start flex-row gap-4 lg:w-[60%]">
            <div className="lg:pl-28 lg:pr-32 lg:block hidden">
              <div className="font-clash flex flex-col gap-2 items-center lg:items-start text-center lg:text-start font-extrabold md:text-2xl text-lg mb-2">
                <p className="text-white leading-[1]">Prizes and</p>
                <p className="text-primary">Rewards</p>
              </div>
              <p className="md:text-sm text-xs text-center lg:text-start leading-7 lg:pb-16 pb-6 lg:w-[80%]">
                Highlight of the prizes or rewards for winners and for
                participants.
              </p>
            </div>

            <Image
              src="/assets/images/Rewards.png"
              alt="awards"
              width={500}
              height={500}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PricesAndRewards;
