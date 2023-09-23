import React, { FC, TextareaHTMLAttributes } from 'react';

export interface IProps {
  label?: string;
  placeholder?: string;
  className?: string;
}

const TextArea: FC<IProps & TextareaHTMLAttributes<HTMLTextAreaElement>> = ({
  label,
  placeholder,
  className,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-xs">{label}</label>}

      <textarea
        className={`${className} border-[1px] gap-2 focus:border-primary border-white rounded-[4px] w-full py-4 lg:py-1 outline-none bg-transparent text-xs placeholder:text-white/25 text-white/25 px-4`}
        placeholder={placeholder}
        {...props}
        rows={6}
      />
    </div>
  );
};

export default TextArea;
