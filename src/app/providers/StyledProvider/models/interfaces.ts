import {
  type TGap,
  type TPadding,
  type TBorderRadius,
  type TTransition,
} from '@model/types/TStyles';

interface IGaps {
  gapLittle1: TGap;
  gapLittle2: TGap;
  gapMedium1: TGap;
  gapMedium2: TGap;
  gapBig: TGap;
}

interface IPaddings {
  paddingLittle1: TPadding;
  paddingLittle2: TPadding;
  paddingMedium1: TPadding;
  paddingMedium2: TPadding;
  paddingBig: TPadding;
}

interface ITransitions {
  transitionLinearSlow: TTransition;
  transitionLinearFast: TTransition;
  transitionEaseSlow: TTransition;
  transitionEaseFast: TTransition;
}

interface IBorderRadius {
  borderRadiusLittle: TBorderRadius;
  borderRadiusMedium: TBorderRadius;
  borderRadiusBig: TBorderRadius;
}

interface IColors {
  colorTextMain: string;
  colorMainLighter: string;
  colorMainDarker: string;
  colorTextAdd1: string;
  colorTextAdd2: string;
  colorMain: string;
  colorAdd1: string;
  colorAddRed: string;
  colorAddYellow: string;
}

export interface ITheme {
  gaps: IGaps;
  paddings: IPaddings;
  borderRadiuses: IBorderRadius;
  transitions: ITransitions;
  colors: IColors;
}
