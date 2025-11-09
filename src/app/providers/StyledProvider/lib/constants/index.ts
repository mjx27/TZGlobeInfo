import { type ITheme } from '../../models/interfaces';

export const constTheme: ITheme = {
  gaps: {
    gapLittle1: '5px',
    gapLittle2: '10px',
    gapMedium1: '15px',
    gapMedium2: '20px',
    gapBig: '40px',
  },
  paddings: {
    paddingLittle1: '5px',
    paddingLittle2: '10px',
    paddingMedium1: '15px',
    paddingMedium2: '20px',
    paddingBig: '40px',
  },
  borderRadiuses: {
    borderRadiusLittle: '5px',
    borderRadiusMedium: '10px',
    borderRadiusBig: '20px',
  },
  transitions: {
    transitionLinearFast: '0.15s linear',
    transitionLinearSlow: '0.4s linear',
    transitionEaseFast: '0.2s ease',
    transitionEaseSlow: '0.4s ease',
  },
  colors: {
    colorMain: '#151515',
    colorMainLighter: '#303030',
    colorMainDarker: '#121212',
    colorTextMain: '#fff',
    colorTextAdd1: '#a6a6a6',
    colorTextAdd2: '#000',
    colorAdd1: '#A5C05B',
    colorAddYellow: '#ddc332',
    colorAddRed: '#fa4e42',
  },
};
