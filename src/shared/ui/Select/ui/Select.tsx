'use client';
import { type Dispatch, type SetStateAction, useState } from 'react';

import { type TRenderable } from '@/shared/model/types/TRenderable';

import { Option } from './Option';
import { StyledSelect } from './StyledSelect';

interface IProps<T extends TRenderable> {
  picked: T;
  setPicked: Dispatch<SetStateAction<T>>;
  options: T[];
}

export const Select = <T extends TRenderable>({
  picked,
  setPicked,
  options,
}: IProps<T>) => {
  const [isActive, setIsActive] = useState(false);

  const handleOpen = () => setIsActive((prevValue) => !prevValue);
  const handlePick = (option: T) => {
    return () => {
      setPicked(option);
      setIsActive(false);
    };
  };

  return (
    <StyledSelect isActive={isActive}>
      <button aria-expanded={isActive} type="button" onClick={handleOpen}>
        {picked.toString()}
      </button>
      <div>
        {options.map((option) => (
          <Option
            key={option.toString()}
            handlePick={handlePick(option)}
            isActive={option === picked}
            option={option.toString()}
          />
        ))}
      </div>
    </StyledSelect>
  );
};
