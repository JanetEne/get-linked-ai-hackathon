import Button from '@components/Atoms/Button';
import Icon from '@components/Atoms/Icon';
import Input from '@components/Atoms/Input';
import TextArea from '@components/Atoms/TextArea';
import ContactLayout from '@components/Layouts/Contact';
import React from 'react';

const Contact = () => {
  return (
    <ContactLayout title="Contact">
      <div className="lg:shadow-cardShadow lg:bg-white/5 w-full px-[1rem] sm:px-[2rem] md:px-[3rem] 2xl:px-[4rem] lg:py-12 py-4 lg:rounded-xl lg:bg-[rgba(255, 255, 255, 0.03)] flex flex-col gap-6">
        <p className="text-primary font-semibold font-clash text-2xl">
          Questions or need assistance? <br /> Let us know about it!
        </p>

        <p className="text-xs flex lg:hidden">
          Email us below to any question related <br />
          to our event
        </p>

        <Input
          placeholder="First Name"
          className="!text-white placeholder:text-white"
        />
        <Input
          placeholder="Email"
          className="!text-white placeholder:text-white"
        />

        <Input
          placeholder="Phone"
          className="!text-white placeholder:text-white"
        />
        <TextArea
          placeholder="Message"
          className="!text-white placeholder:text-white"
        />

        <div className="mt-4 justify-center items-center flex">
          <div className="lg:w-1/3 w-2/5">
            <Button label="Submit" />
          </div>
        </div>

        <div className="flex flex-col justify-center gap-1 mt-6 items-center">
          <p className="text-primary text-sm">Share on</p>
          <div className="flex gap-x-4 items-center">
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
    </ContactLayout>
  );
};

export default Contact;
