import Button from '@components/Atoms/Button';
import Container from '@components/Atoms/Container';
import Image from 'next/image';
import React from 'react';

const JudgingCriteria = () => {
  return (
    <Container className="py-20">
      <div className="lg:gap-20 gap-10 flex flex-col lg:flex-row lg:pl-26 lg:pr-20">
        <div className="lg:w-[60%] flex justify-center items-center">
          <Image
            src="/assets/images/judging-criteria.png"
            alt="the big idea"
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col gap-4 lg:w-[40%] justify-center items-center lg:items-start text-center lg:text-start ">
          <div className="font-clash flex flex-col gap-2 items-center lg:items-start text-center lg:text-start font-extrabold lg:text-2xl text-lg mb-2">
            <p className="leading-[1]">Judging Criteria</p>
            <p className="text-primary">Key attributes</p>
          </div>
          <p className="lg:text-sm text-xs leading-7">
            <span className="text-tetiary font-semibold">
              Innovation and Creativity:
            </span>{' '}
            Evaluate the uniqueness and creativity of the solution. Consider
            whether it addresses a real-world problem in a novel way or
            introduces innovative features.
          </p>
          <p className="lg:text-sm text-xs leading-7">
            <span className="text-tetiary font-semibold">Functionality:</span>{' '}
            Assess how well the solution works. Does it perform its intended
            functions effectively and without major issues? Judges would
            consider the completeness and robustness of the solution.
          </p>
          <p className="lg:text-sm text-xs leading-7">
            <span className="text-tetiary font-semibold">
              Impact and Relevance:
            </span>{' '}
            Determine the potential impact of the solution in the real world.
            Does it address a significant problem, and is it relevant to the
            target audience? Judges would assess the potential social, economic,
            or environmental benefits.
          </p>
          <p className="lg:text-sm text-xs leading-7">
            <span className="text-tetiary font-semibold">
              Technical Complexity:
            </span>{' '}
            Evaluate the technical sophistication of the solution. Judges would
            consider the complexity of the code, the use of advanced
            technologies or algorithms, and the scalability of the solution.
          </p>
          <p className="lg:text-sm text-xs leading-7">
            <span className="text-tetiary font-semibold">
              Adherence to Hackathon Rules:
            </span>{' '}
            Judges will Ensure that the team adhered to the rules and guidelines
            of the hackathon, including deadlines, use of specific technologies
            or APIs, and any other competition-specific requirements.
          </p>
          <div className="w-2/5 mt-6">
            <Button label="Read More" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default JudgingCriteria;
