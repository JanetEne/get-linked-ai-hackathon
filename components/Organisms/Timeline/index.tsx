import Container from '@components/Atoms/Container';
import React from 'react';

const Timeline = () => {
  return (
    <div id="timeline">
      <Container className="py-20">
        <div className="flex flex-col gap-4 justify-center items-center mb-10">
          <p className="leading-[1] font-extrabold lg:text-2xl text-lg font-clash ">
            Timeline
          </p>
          <p className="lg:text-sm text-xs text-center leading-7 lg:leading-7">
            Here is the breakdown of the time we anticipate
            <br className="hidden lg:block" /> using for the upcoming event.
          </p>
        </div>
        <div className="block 2xl:hidden">
          <div className="lg:grid lg:grid-cols-[45%_5%_45%] flex lg:gap-10 gap-2 items-start lg:items-end mb-8">
            <div className="flex flex-col items-start lg:items-end lg:gap-2 lg:order-1 order-2">
              <p className="text-md lg:text-lg font-bold text-right text-primary">
                Hackathon Announcement
              </p>
              <p className="leading-4 lg:leading-7 lg:text-sm text-xs lg:text-right text-start">
                The getlinked tech hackathon 1.0 is formally announced{' '}
                <br className="hidden lg:block" /> to the general public and
                teams begin to get ready to register
              </p>
              <div className="flex lg:hidden mt-3">
                <p className="text-primary text-lg font-bold">
                  November 18, 2023
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 items-center lg:order-2 order-1">
              <span className="border-primary border-t lg:border-[2px] border-[1.8px] h-[4.5rem] lg:h-24"></span>
              <div className="rounded-full bg-gradient-to-r from-primary to-secondary lg:w-8 lg:h-8 w-6 h-6 text-white font-bold text-md flex items-center justify-center">
                1
              </div>
            </div>

            <div className="items-end hidden lg:flex lg:order-3">
              <p className="text-primary text-lg font-bold">
                November 18, 2023
              </p>
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-[45%_5%_45%] flex lg:gap-10 gap-2 items-start lg:items-end mb-8">
            <p className="text-primary text-lg font-bold hidden lg:flex justify-end lg:order-1">
              November 18, 2023
            </p>

            <div className="flex flex-col gap-2 items-center lg:order-2 order-1 ">
              <span className="border-primary border-t lg:border-[2px] border-[1.8px] h-[4.5rem]"></span>
              <div className="rounded-full bg-gradient-to-r from-primary to-secondary lg:w-8 lg:h-8 w-6 h-6 text-white font-bold text-md flex items-center justify-center">
                2
              </div>
            </div>

            <div className="flex flex-col items-start lg:gap-2 lg:order-3 order-2">
              <p className="text-md lg:text-lg text-start font-bold text-primary">
                Teams Registration begins
              </p>
              <p className="text-xs leading-4 lg:leading-7 lg:text-sm">
                Interested teams can now show their interest in the{' '}
                <br className="hidden lg:block" />
                getlinked tech hackathon 1.0 2023 by proceeding to register
              </p>
              <div className="flex lg:hidden mt-3">
                <p className="text-primary text-md font-bold">
                  November 18, 2023
                </p>
              </div>
            </div>
          </div>
          <div className="lg:grid flex lg:grid-cols-[45%_5%_45%] lg:gap-10 gap-2 items-start lg:items-end mb-8">
            <div className="flex flex-col items-start lg:items-end lg:gap-2 lg:order-1 order-2">
              <p className="text-md font-bold text-right text-primary">
                Teams Registration ends
              </p>
              <p className="lg:text-right text-start leading-4 lg:leading-7 lg:text-sm text-xs">
                Interested Participants are no longer Allowed to{' '}
                <br className="hidden lg:block" />
                register
              </p>
              <div className="flex lg:hidden mt-3">
                <p className="text-primary text-lg font-bold">
                  November 18, 2023
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 items-center lg:order-2 order-1">
              <span className="border-primary border-t lg:border-[2px] border-[1.8px] h-[4.5rem] lg:h-24"></span>
              <div className="rounded-full bg-gradient-to-r from-primary to-secondary lg:w-8 lg:h-8 w-6 h-6 text-white font-bold text-md flex items-center justify-center">
                3
              </div>
            </div>

            <div className="items-end hidden lg:flex lg:order-3">
              <p className="text-primary text-md font-bold">
                November 18, 2023
              </p>
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-[45%_5%_45%] flex lg:gap-10 gap-2 items-start lg:items-end mb-8">
            <p className="text-primary text-lg font-bold hidden lg:flex justify-end lg:order-1">
              November 18, 2023
            </p>

            <div className="flex flex-col gap-2 items-center lg:order-2 order-1 ">
              <span className="border-primary border-t lg:border-[2px] border-[1.8px] h-[4.5rem]"></span>
              <div className="rounded-full bg-gradient-to-r from-primary to-secondary lg:w-8 lg:h-8 w-6 h-6 text-white font-bold text-md flex items-center justify-center">
                4
              </div>
            </div>

            <div className="flex flex-col items-start lg:gap-2 lg:order-3 order-2">
              <p className="lg:text-lg text-md text-start font-bold text-primary">
                Announcement of the accepted teams
                <br className="hidden lg:block" />
                and ideas
              </p>
              <p className="leading-4 lg:leading-7 lg:text-sm text-xs">
                All teams whom idea has been accepted into getlinked tech{' '}
                <br className="hidden lg:flex" />
                hackathon 1.0 2023 are formally announced
              </p>
              <div className="flex lg:hidden mt-3">
                <p className="text-primary text-lg font-bold">
                  November 18, 2023
                </p>
              </div>
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-[45%_5%_45%] flex lg:gap-10 gap-2 items-start lg:items-end mb-8">
            <div className="flex flex-col items-start lg:items-end lg:gap-4 lg:order-1 order-2">
              <p className="lg:text-lg text-md font-bold lg:text-right  text-primary">
                Getlinked Hackathon 1.0 Offically Begins
              </p>
              <p className="lg:text-right text-start leading-4 lg:leading-7 lg:text-sm text-xs">
                Accepted teams can now proceed to build their{' '}
                <br className="hidden lg:block" />
                ground breaking skill driven solutions
              </p>
              <div className="flex lg:hidden mt-3">
                <p className="text-primary text-lg font-bold">
                  November 18, 2023
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 items-center lg:order-2 order-1">
              <span className="border-primary border-t lg:border-[2px] border-[1.8px] h-[4.5rem] lg:h-24"></span>
              <div className="rounded-full bg-gradient-to-r from-primary to-secondary lg:w-8 lg:h-8 w-6 h-6 text-white font-bold text-md flex items-center justify-center">
                5
              </div>
            </div>

            <div className="items-end hidden lg:flex lg:order-3">
              <p className="text-primary text-lg font-bold">
                November 18, 2023
              </p>
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-[45%_5%_45%] flex lg:gap-10 gap-2 items-start lg:items-end mb-8">
            <p className="text-primary lg:text-lg text-md font-bold hidden lg:flex justify-end lg:order-1">
              November 18, 2023
            </p>

            <div className="flex flex-col gap-2 items-center lg:order-2 order-1 ">
              <span className="border-primary border-t lg:border-[2px] border-[1.8px] h-[4.5rem]"></span>
              <div className="rounded-full bg-gradient-to-r from-primary to-secondary lg:w-8 lg:h-8 w-6 h-6 text-white font-bold text-md flex items-center justify-center">
                6
              </div>
            </div>

            <div className="flex flex-col items-start lg:gap-4 lg:order-3 order-2">
              <p className="text-md text-start font-bold text-primary">
                Demo Day
              </p>
              <p className="leading-4 lg:leading-7 lg:text-sm text-xs">
                Teams get the opportunity to pitch their projects to judges.{' '}
                <br className="hidden lg:block" />
                The winner of the hackathon will also be announced on{' '}
                <br className="hidden lg:block" />
                this day
              </p>
              <div className="flex lg:hidden mt-3">
                <p className="text-primary text-md font-bold">
                  November 18, 2023
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden 2xl:block">
          <div className="flex flex-col items-center justify-center gap-2 relative mb-3">
            <div className="flex flex-col gap-4 left-[15.3rem] absolute -bottom-[10px]">
              <p className="text-md font-bold text-right text-primary">
                Hackathon Announcement
              </p>
              <p className="text-right text-xs">
                The getlinked tech hackathon 1.0 is formally announced{' '}
                <br className="hidden lg:block" /> to the general public and
                teams begin to get ready to register
              </p>
            </div>
            <span className="border-primary border-t border-[2px] h-24"></span>
            <div className="rounded-full bg-gradient-to-r from-primary to-secondary w-8 h-8 text-white font-bold text-md flex items-center justify-center">
              1
            </div>
            <p className="text-primary text-md right-[28rem] font-bold absolute bottom-1">
              November 18, 2023
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 relative mb-3">
            <p className="text-primary text-md left-[29rem] font-bold absolute bottom-[2px]">
              November 18, 2023
            </p>

            <span className="border-primary border-t border-[2px] h-[4.5rem]"></span>
            <div className="rounded-full bg-gradient-to-r from-primary to-secondary w-8 h-8 text-white font-bold text-md flex items-center justify-center">
              2
            </div>
            <div className="flex flex-col gap-4 right-[15.3rem] text-start absolute -bottom-[10px]">
              <p className="text-md font-bold text-primary">
                Teams Registration begins
              </p>
              <p className="text-xs">
                Interested teams can now show their interest in the{' '}
                <br className="hidden lg:block" />
                getlinked tech hackathon 1.0 2023 by proceeding to register
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 relative mb-3">
            <div className="flex flex-col gap-4 left-[20rem] absolute -bottom-[10px]">
              <p className="text-md font-bold text-right text-primary">
                Teams Registration ends
              </p>
              <p className="text-right text-xs">
                Interested Participants are no longer Allowed to{' '}
                <br className="hidden lg:block" />
                register
              </p>
            </div>
            <span className="border-primary border-t border-[2px] h-[4.5rem]"></span>
            <div className="rounded-full bg-gradient-to-r from-primary to-secondary w-8 h-8 text-white font-bold text-md flex items-center justify-center">
              3
            </div>
            <p className="text-primary text-md right-[28rem] font-bold absolute bottom-1">
              November 18, 2023
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 relative mb-3">
            <p className="text-primary text-md left-[29rem] font-bold absolute bottom-[2px]">
              November 18, 2023
            </p>

            <span className="border-primary border-t border-[2px] h-[4.5rem]"></span>
            <div className="rounded-full bg-gradient-to-r from-primary to-secondary w-8 h-8 text-white font-bold text-md flex items-center justify-center">
              4
            </div>
            <div className="flex flex-col gap-4 right-[15.3rem] text-start absolute -bottom-[2rem]">
              <p className="text-md font-bold text-primary">
                Announcement of the accepted teams{' '}
                <br className="hidden lg:block" />
                and ideas
              </p>
              <p className=" text-xs">
                All teams whom idea has been accepted into getlinked tech{' '}
                <br className="hidden lg:block" />
                hackathon 1.0 2023 are formally announced
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 relative mb-3">
            <div className="flex flex-col gap-4 left-[18rem] absolute -bottom-[10px]">
              <p className="text-md font-bold text-right text-primary">
                Getlinked Hackathon 1.0 Offically Begins
              </p>
              <p className="text-right text-xs">
                Accepted teams can now proceed to build their{' '}
                <br className="hidden lg:block" />
                ground breaking skill driven solutions
              </p>
            </div>
            <span className="border-primary border-t border-[2px] h-24"></span>
            <div className="rounded-full bg-gradient-to-r from-primary to-secondary w-8 h-8 text-white font-bold text-md flex items-center justify-center">
              5
            </div>
            <p className="text-primary text-md right-[28rem] font-bold absolute bottom-1">
              November 18, 2023
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 relative mb-3">
            <p className="text-primary text-md left-[29rem] font-bold absolute bottom-[2px]">
              November 18, 2023
            </p>

            <span className="border-primary border-t border-[2px] h-[4.5rem]"></span>
            <div className="rounded-full bg-gradient-to-r from-primary to-secondary w-8 h-8 text-white font-bold text-md flex items-center justify-center">
              6
            </div>
            <div className="flex flex-col gap-4 right-[15.3rem] text-start absolute -bottom-[4.3rem]">
              <p className="text-md font-bold text-primary">Demo Day</p>
              <p className="text-xs leading-4 lg:leading-7">
                Teams get the opportunity to pitch their projects to judges.{' '}
                <br className="hidden lg:block" />
                The winner of the hackathon will also be announced on{' '}
                <br className="hidden lg:block" />
                this day
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Timeline;
