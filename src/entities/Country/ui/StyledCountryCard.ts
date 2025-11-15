import styled from '@emotion/styled';

export const StyledCountryCard = styled.article`
  padding: ${(props) => props.theme.paddings.paddingMedium1};
  height: 400px;
  display: grid;
  box-shadow: 0 0 17px 2px ${(props) => props.theme.colors.colorMainDarker};
  border-radius: ${(props) => props.theme.borderRadiuses.borderRadiusLittle};
  grid-template-rows: 1fr 60px 20px 40px;
  gap: 10px;
  min-width: 300px;
  max-width: 500px;

  div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: ${(props) => props.theme.gaps.gapLittle1};
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors.colorTextAdd1};
  }

  cite {
    color: ${(props) => props.theme.colors.colorTextAdd1};
  }
`;
