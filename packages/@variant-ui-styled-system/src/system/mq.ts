import { sizes } from './size';
import type { TSize } from './size';
import type { TBreakpointBase } from './breakpoint';

export type TMediaQueryKey = 'up' | 'down';

export type TMediaQueryValue = {
  [key in TMediaQueryKey]?: string;
};

export type TMediaQuery = {
  [key in TSize]: TMediaQueryValue;
};

export function createMediaQuery(breakpoints: TBreakpointBase): TMediaQuery {
  const mq: TMediaQuery = {} as TMediaQuery;
  const max = Math.max(...breakpoints.filter((bp) => Number.isFinite(bp)));
  const min = Math.min(...breakpoints.filter((bp) => Number.isFinite(bp)));

  let prev = min;

  sizes.forEach((size, index) => {
    const value = breakpoints[index];
    const v = Number.isFinite(value) ? value : prev;

    if (index === 0) {
      mq[size] = {
        down: `@media (max-width: ${min}px)`,
      };
      return;
    }

    if (index === sizes.length - 1) {
      mq[size] = {
        up: `@media (min-width: ${max}px)`,
      };
      return;
    }

    mq[size] = {
      up: `@media (min-width: ${v}px)`,
      down: `@media (max-width: ${v - 1}px)`,
    };

    if (Number.isFinite(value)) prev = value;
  });

  return mq;
}
