import type {
  TAlignContent,
  TAlignItems,
  TGap,
  TJustifyContent,
  TJustifyItems,
  TPadding,
} from '@/shared/model/types/TStyles';

export interface IStyleKeys {
  height: string;
  width: string;
  padding: TPadding;
  alignItems: TAlignItems;
  alignContent: TAlignContent;
  justifyItems: TJustifyItems;
  justifyContent: TJustifyContent;
  gap: TGap;
}
