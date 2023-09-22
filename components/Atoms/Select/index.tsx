import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import Icon from '../Icon';

interface ISelect {
  data?: any[];
  setState: (value: string) => void;
  title: string;
  label?: string;
}

const Select = ({ data, setState, title, label }: ISelect) => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const dropDown = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const closeDropDown = (e: any) => {
      if (dropDown.current && !dropDown.current?.contains(e.target)) {
        setShowDropDown(false);
      }
    };
    document.addEventListener('mousedown', closeDropDown);
    return () => {
      document.removeEventListener('mousedown', closeDropDown);
    };
  }, [setShowDropDown]);

  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-xs">{label}</label>}

      <div
        className="py-4 px-3 text-xs border-[#DEE3E9] border rounded-[4px] flex gap-5 relative cursor-pointer"
        ref={dropDown}
      >
        <div
          className="w-full flex gap-4 items-center"
          onClick={() => setShowDropDown(!showDropDown)}
        >
          <div className="w-full flex justify-between">
            <div>{title}</div>
            <Icon icon="ArrowDown" />
          </div>
        </div>
        {showDropDown && (
          <div className="absolute z-40 top-[45px] bg-[#ffffff] left-[0] w-full rounded-br-lg border-[#D1D5DB] border-[1px] rounded-bl-lg border-t-0 mb-8">
            <div className="overflow-y-auto max-h-[200px]">
              {data?.map((item, index) => (
                <div
                  key={index}
                  className="py-2 pl-6 hover:bg-[#E1EEFB] text-secondary"
                  onClick={() => {
                    setState(item);
                    setShowDropDown(false);
                  }}
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Select;
