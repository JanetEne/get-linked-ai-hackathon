import React, { ButtonHTMLAttributes, ReactElement } from 'react';

interface ButtonProp {
  loading?: boolean;
  label?: string;
  size?: 'small' | 'medium' | 'large';
  type?: 'transparent' | 'block';
}

const Button = (
  props: ButtonProp & ButtonHTMLAttributes<HTMLButtonElement>
) => {
  const { loading, size = 'medium', label, type = 'block' } = props;

  return (
    <button
      disabled={loading}
      className={` w-full text-white rounded-sm ${
        size === 'small'
          ? 'text-[14px] px-4 py-2'
          : size === 'large'
          ? 'text-base px-6 py-4'
          : 'text-sm lg:text-base font-normal px-3 lg:px-5 py-2 lg:py-3'
      }
      ${
        type === 'block'
          ? 'bg-gradient-to-r from-[#FE34B9] via-primary  to-secondary'
          : 'bg-transparent'
      }`}
      {...props}
    >
      {label}
    </button>
  );
};
export default Button;
