import type { SHADOW_STYLE_DEFAULT } from '../lib/constants';

type TShadowStylesKeys = Lowercase<keyof typeof SHADOW_STYLE_DEFAULT>;

export type TShadowStyleProps = {
  [T in TShadowStylesKeys]?: string;
};
