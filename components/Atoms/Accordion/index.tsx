import React, { FC, ReactNode, useState } from 'react';
import Icon from '../Icon';

interface IAccordion {
  title: string;
  content?: ReactNode;
}

const Accordion: FC<IAccordion> = ({ title, content }) => {
  const [showContent, setShowContent] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="md:text-sm text-xs">{title}</p>
        <div className="flex justify-end">
          <Icon icon="Plus" className="w-3 h-3" />
        </div>
      </div>

      <hr className="border-primary" />
    </div>
  );
};

export default Accordion;
