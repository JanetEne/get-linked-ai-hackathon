import { ReactNode, useEffect, useState } from 'react';

interface IProps {
  children: ReactNode;
  isVisible: boolean;
  close: (value: boolean) => void;
  title?: string;
  center?: boolean;
  bgColor?: string;
}

export const Modal = ({
  children,
  isVisible,
  close,
  title,
  center,
}: IProps) => {
  const [openModal, setOpenModal] = useState<boolean>();

  useEffect(() => {
    isVisible ? setOpenModal(true) : setOpenModal(false);
    if (isVisible === true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isVisible]);

  return (
    <>
      {openModal ? (
        <div
          className={`bg-background/90 fixed  overflow-y-auto z-[9999] h-full w-full flex justify-center  ${
            center ? 'items-center' : ''
          }`}
        >
          <div className="w-full max-w-[600px] xl:min-w-[450px] px-4 md:px-0 mb-0">
            <div
              className={`animate-popUp md:animate-appear px-6 py-6 xlg:mx-4 bg-transparent border-primary rounded-md border-[1px] mb-0`}
            >
              <div
                className={`${
                  title ? 'justify-between ' : 'justify-end '
                } flex items-center `}
              >
                {title && <div className=" font-semibold">{title}</div>}
              </div>

              <div>{children}</div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
