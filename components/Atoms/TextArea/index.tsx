import React, { FC, TextareaHTMLAttributes } from 'react';

export interface IProps {
  parentClassName?: string;
  label?: string;
  placeholder?: string;
}

const TextArea: FC<IProps & TextareaHTMLAttributes<HTMLTextAreaElement>> = ({
  label,
  parentClassName,
  placeholder,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <div className="text-sm">{label}</div>}
      <div
        className={`flex items-center border-[2px] gap-2 border-white rounded-lg relative focus-within:border-2 focus-within:border-secondary`}
      >
        <textarea
          className={`peer w-full border-none outline-none bg-transparent pt-5 pb-2 px-4]`}
          {...props}
          placeholder=" "
        />
        <label className="pointer-events-none absolute left-4 peer-focus:leading-[1] top-1 transition-all peer-placeholder-shown:text-[16px] text-xs peer-focus:text-xs peer-placeholder-shown:leading-[2.8] text-white">
          {placeholder}
        </label>
      </div>
    </div>
  );
};

export default TextArea;
