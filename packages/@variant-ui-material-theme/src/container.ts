import { css } from '@emotion/css';
import { mq } from './mq';
import { TContainer } from '@variant-ui/styled-system';

const defaultContainer = {
  padding: '0 12rem',
  [mq.lg.down as string]: {
    padding: '0 1rem',
  },
};

export const container: TContainer = {
  fluid: css(defaultContainer),
  fixed: css(defaultContainer),
};
