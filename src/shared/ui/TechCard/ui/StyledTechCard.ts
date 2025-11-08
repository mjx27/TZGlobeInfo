import styled from '@emotion/styled';

import { Container } from '../../Container';

export const StyledTechCard = styled(Container)`
  width: 400px;
  flex-direction: column;
  border-radius: ${(props) => props.theme.borderRadiuses.borderRadiusMedium};
  box-shadow: 0 0 7px 2px ${(props) => props.theme.colors.colorMainDarker};
  border: 2px solid ${(props) => props.theme.colors.colorMainDarker};
`;
