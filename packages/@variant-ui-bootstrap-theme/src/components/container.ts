import { mq } from '../mq';
import type { TContainer } from '@variant-ui/styled-system';

const defaultContainer = {
  width: '100%',
  padding: '0 24px',
  'box-sizing': 'border-box',
  [mq.lg.down as string]: {
    padding: '0 16px',
  },
};

export const container: TContainer = {
  fluid: { root: defaultContainer },
  fixed: { root: defaultContainer },
};
