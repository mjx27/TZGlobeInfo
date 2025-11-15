import styled from '@emotion/styled';

export const StyledCountryCard = styled.article`
  padding: ${(props) => props.theme.paddings.paddingMedium1};
  height: 400px;
  width: 400px;
  display: grid;
  box-shadow: 0 0 17px 6px ${(props) => props.theme.colors.colorMainDarker};
  border-radius: ${(props) => props.theme.borderRadiuses.borderRadiusLittle};
  grid-template-rows: 1fr 60px 20px 40px;
  gap: 10px;

  img + h4 {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    text-align: center;
    transform: translateX(-50%) translateY(-50%);
    transition: opacity
      ${(props) => props.theme.transitions.transitionLinearFast};
    font-size: 2rem;
  }

  img {
    justify-self: center;
    margin: 0 auto;
    max-width: 370px;
    height: 200px;
    opacity: 0.5;
    transition:
      opacity ${(props) => props.theme.transitions.transitionLinearFast},
      transform ${(props) => props.theme.transitions.transitionLinearFast};
  }

  div {
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: ${(props) => props.theme.gaps.gapLittle1};
  }

  div:nth-child(1) {
    box-shadow: inset 0 0 7px 20px
      ${(props) => props.theme.colors.colorMainDarker};
    z-index: 3;
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors.colorTextAdd1};
  }

  cite {
    color: ${(props) => props.theme.colors.colorTextAdd1};
  }

  &:hover {
    img {
      opacity: 1;
      transform: scale(1.1);
    }

    img + h4 {
      opacity: 0;
    }
  }
`;
