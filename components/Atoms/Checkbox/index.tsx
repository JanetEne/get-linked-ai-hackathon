import React, { ChangeEventHandler } from 'react';

interface CheckboxProps {
  label?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  checked: boolean;
}

const Checkbox = ({ label, onChange, checked }: CheckboxProps) => {
  return (
    <div className="flex gap-2 text-xs">
      <input
        type="checkbox"
        onChange={onChange}
        checked={checked}
        className="border-white accent-tetiary !bg-transparent rounded-sm border-[1px]"
      />
      {label && <label>{label}</label>}
    </div>
  );
};

export default Checkbox;
