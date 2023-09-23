import Accordion from '@components/Atoms/Accordion';
import Container from '@components/Atoms/Container';
import Image from 'next/image';
import React from 'react';

const Faqs = () => {
  const titleArray = [
    { title: 'Can I work on a project I started before the hackathon?' },
    { title: 'What happens if I need help during the hackathon?' },
    { title: 'What happens if I don"t have an idea for a project?' },
    { title: 'Can I join a team or do I have to come with one?' },
    { title: 'What happens after the hackathon ends' },
    { title: 'Can I work on a project I started before the hackathon?' },
  ];

  return (
    <div id="faqs">
      <Container className="py-20">
        <div className="lg:gap-20 gap-10 flex flex-col lg:flex-row lg:px-20">
          <div className="flex flex-col gap-4 lg:w-[50%] justify-center xl:pl-16">
            <div className="font-clash flex flex-col gap-2 items-center lg:items-start text-center lg:text-start font-extrabold md:text-2xl text-lg mb-2">
              <p className="text-white leading-[1]">Frequently Asked</p>
              <p className="text-primary">Questions</p>
            </div>
            <p className="md:text-sm text-xs text-center lg:text-start leading-7 lg:pb-16 pb-6 lg:w-[80%]">
              We got answers to the questions that you might want to ask about{' '}
              <span className="font-medium">getlinked Hackathon 1.0</span>
            </p>

            {titleArray.map((item, index) => (
              <div className="w-full md:mb-4 mb-2" key={index}>
                <Accordion title={item.title} />
              </div>
            ))}
          </div>
          <div className="lg:w-[50%] flex justify-center items-center">
            <Image
              src="/assets/images/faqs.png"
              alt="faqs"
              width={500}
              height={500}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Faqs;
