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
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.125rem;
  }

  p {
    font-size: 1rem;
    text-align: justify;
  }

  header {
    padding: ${theme.paddings.paddingMedium2} 0;
    width: 90%;
    display: flex;
    justify-content: space-between;

    h1 {
      font-size: 2rem;
    }

    nav {
      display: flex;
      gap: ${theme.gaps.gapMedium1};
    }
  }

  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${theme.gaps.gapMedium2};
    align-items: center;

    section {
      padding: ${theme.paddings.paddingBig} 0;
      width: 90%;
      overflow: hidden;
    }
  }

  footer {
    padding: ${theme.paddings.paddingBig};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.colorMainDarker};
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
