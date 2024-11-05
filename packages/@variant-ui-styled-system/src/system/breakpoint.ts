import { TSize } from './size';

export type TBreakpointBase = [number, number, number, number, number, number];

export type TBreakpoints = {
  [key in TSize]: number;
};
