import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  isVisible: boolean;
  close: (value: boolean) => void;
  title?: string;
  center?: boolean;
  bgColor?: string;
  darkenOverlay?: boolean;
}

export const Modal = ({
  children,
  isVisible,
  close,
  title,
  center,
  bgColor,
  darkenOverlay = true,
}: IProps) => {
  if (!isVisible) {
    return null;
  } else {
    document.body.style.overflow = 'hidden';
    // document.getElementById('fc_frame')!.style.display = 'none';
  }

  return (
    <div
      className={`${
        darkenOverlay ? 'bg-black/40 ' : 'bg-black/0 '
      } fixed top-0 right-0 overflow-y-auto z-[9999] h-full w-full  flex justify-center  ${
        center ? ' items-end md:items-center ' : ''
      }`}
    >
      <div className="animate-popUp md:animate-appear w-full md:max-w-[600px] xl:min-w-[450px] mb-0">
        <div
          className={` px-6 py-6 xlg:mx-4 rounded-t-xl md:rounded-xl ${
            bgColor ? bgColor : 'bg-white '
          }`}
        >
          <div
            className={`${
              title ? 'justify-between ' : 'justify-end '
            } flex items-center `}
          >
            {title && <div className=" font-semibold">{title}</div>}
            <span
              onClick={() => {
                document.body.style.overflow = 'scroll';
                document.getElementById('fc_frame')!.style.display = 'unset';
                close(false);
              }}
              className="px-0  cursor-pointer"
            ></span>
          </div>

          <div className="pb-4 pt-8">{children}</div>
        </div>
      </div>
    </div>
  );
};
