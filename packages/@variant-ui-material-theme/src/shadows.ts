import { createShadows } from '@variant-ui/styled-system';
import type { TShadows } from '@variant-ui/styled-system';

const elevation = 24;
const shadowKeyUmbraOpacity = 0.2;
const shadowKeyPenumbraOpacity = 0.14;
const shadowAmbientShadowOpacity = 0.12;

export const keyUmbraShadows: TShadows = createShadows(
  elevation,
  [0, 0],
  [2, 11],
  [1, 15],
  [-1, -7],
  shadowKeyUmbraOpacity,
);

export const keyPenumbraShadows: TShadows = createShadows(
  elevation,
  [0, 0],
  [1, 24],
  [1, 38],
  [0, 3],
  shadowKeyPenumbraOpacity,
);

export const ambientShadows: TShadows = createShadows(
  elevation,
  [0, 0],
  [1, 9],
  [3, 46],
  [0, 8],
  shadowAmbientShadowOpacity,
);

// shadows = keyUmbraShadows, keyPenumbraShadows, ambientShadows
export const shadows: TShadows = keyUmbraShadows.map((_, i) => {
  if (i === 0) return 'none';
  return `${keyUmbraShadows[i]}, ${keyPenumbraShadows[i]}, ${ambientShadows[i]}`;
}) as TShadows;
