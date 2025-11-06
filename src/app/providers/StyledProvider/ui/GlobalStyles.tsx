import { Global, css } from '@emotion/react';

import { constTheme } from '../lib/constants';
import type { ITheme } from '../models/interfaces';

const dynamicGlobalStyles = (theme: ITheme) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    cursor: default;
    color: ${theme.colors.colorTextMain};
    font-family: sans-serif;
  }

  body {
    background-color: ${theme.colors.colorMain};
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 2rem;
  }

  h4 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  #modal-root {
    position: absolute;
    z-index: 1000;
    top: 0;
    left: 0;
  }
`;
export const GlobalStyles = () => {
  return <Global styles={dynamicGlobalStyles(constTheme)} />;
};
