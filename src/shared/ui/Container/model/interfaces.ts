import type {
  TAlignContent,
  TAlignItems,
  TDisplay,
  TGap,
  TJustifyContent,
  TJustifyItems,
  TPadding,
} from '@/shared/model/types/TStyles';

export interface IStyleKeys {
  height: string;
  width: string;
  padding: TPadding;
  display: TDisplay;
  alignItems: TAlignItems;
  alignContent: TAlignContent;
  justifyItems: TJustifyItems;
  justifyContent: TJustifyContent;
  gap: TGap;
}
