import type {
  TAlignContent,
  TAlignItems,
  TDisplay,
  TGap,
  TJustifyContent,
  TJustifyItems,
  TPadding,
} from '@/shared/model/types/TStyles';

export type StyleTypeMap = {
  height: string;
  width: string;
  padding: TPadding;
  display: TDisplay;
  alignItems: TAlignItems;
  alignContent: TAlignContent;
  justifyItems: TJustifyItems;
  justifyContent: TJustifyContent;
  gap: TGap;
};

export type TContainerStyleProps = {
  [K in keyof StyleTypeMap]?: StyleTypeMap[K];
};
