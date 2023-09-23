import React, { FC, InputHTMLAttributes, ReactNode } from 'react';

export interface IProps {
  className?: string;
  label?: string;
  placeholder?: string;
}

const Input: FC<IProps & InputHTMLAttributes<HTMLInputElement>> = ({
  label,
  className,
  placeholder,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-xs">{label}</label>}

      <input
        className={`${className} border-[1px] gap-2 focus:border-primary border-white rounded-[4px] w-full py-4 outline-none bg-transparent text-xs placeholder:text-white/25 text-white/25 px-4`}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default Input;
