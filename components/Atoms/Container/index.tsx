import React, { ReactNode } from 'react';

declare type ContainerType = {
  children: ReactNode;
  className?: string;
};

/*
 * Todo: add this class name 2xl:max-w-screen-2xl 2xl:px-20
 */

const Container = ({ children, className }: ContainerType) => {
  return (
    <div
      className={` lg:max-w-[1200px] 2xl:max-w-[1440px] px-5 sm:px-12 lg:px-8 mx-auto ${
        className ? className : ''
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
