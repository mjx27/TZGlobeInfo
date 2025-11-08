export type TGap = '5px' | '10px' | '15px' | '20px' | '40px';
export type TPadding = '5px' | '10px' | '15px' | '20px' | '30px' | '40px';

export type TBorderRadius = '5px' | '8px' | '10px' | '16px' | '20px' | '32px';

export type TDisplay = 'flex' | 'grid' | 'block';
export type TFlexDirection = 'row' | 'column';
export type TAlignItems =
  | 'stretch'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline';
export type TJustifyItems = 'stretch' | 'flex-start' | 'flex-end' | 'center';

type TFlexAlignment =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
export type TJustifyContent = TFlexAlignment;
export type TAlignContent = TFlexAlignment;

export type TIconSize =
  | '10px'
  | '15px'
  | '20px'
  | '25px'
  | '30px'
  | '40px'
  | '50px';

type TransitionDuration = 0.15 | 0.2 | 0.3 | 0.4;
type TransitionTiming =
  | 'linear'
  | 'ease'
  | 'ease-in'
  | 'ease-out'
  | 'ease-in-out';
export type TTransition = `${TransitionDuration}s ${TransitionTiming}`;
