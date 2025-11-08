import type { IOptionStyleProps } from '../model/IOption';

import { StyledOption } from './StyledOption';

interface IProps extends IOptionStyleProps {
  option: string;
  handlePick: () => void;
}

export const Option = ({ option, handlePick, isActive }: IProps) => {
  return (
    <StyledOption
      isActive={isActive}
      role="option"
      type="button"
      onClick={handlePick}
    >
      {option}
    </StyledOption>
  );
};
