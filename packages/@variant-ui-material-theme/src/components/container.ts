import { mq } from '../mq';
import { TContainer } from '@variant-ui/styled-system';

const defaultContainerSx = {
  width: '100%',
  padding: '0 24px',
  'box-sizing': 'border-box',
  [mq.sm.down as string]: {
    padding: '0 16px',
  },
};

export const container: TContainer = {
  fluid: {
    root: defaultContainerSx,
  },
  fixed: {
    root: defaultContainerSx,
  },
};
