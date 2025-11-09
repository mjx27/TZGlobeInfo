import type { TDifficulty } from './types';

export interface ITechCardColors {
  hard: string;
  medium: string;
  easy: string;
}

export interface ITechCardProps {
  name: string;
  desc: string;
  courseLink: string;
  difficulty: TDifficulty;
}
