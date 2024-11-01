// 24 elevation levels
export type TShadows = [
  'none',
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
];

function scale(domain: number, range: [number, number]) {
  const values = new Array(domain);
  const step = (range[1] - range[0]) / domain;
  return values.fill(0).map((_, i) => Math.round(range[0] + i * step));
}

/*
 * function createShadows
 * @param domain number
 * @param [number, number] hOffsetRange
 * @param [number, number] vOffsetRange
 * @param [number, number] blurRange
 * @param [number, number] spreadRange
 * @param number opacity
 * return TShadows
 */
export function createShadows(
  domain: number,
  hOffsetRange: [number, number],
  vOffsetRange: [number, number],
  blurRange: [number, number],
  spreadRange: [number, number],
  opacity: number,
): TShadows {
  const shadows = new Array(domain).fill('none');
  const scaleDomain = domain - 1; // first element is 'none'

  const hOffsets = scale(scaleDomain, hOffsetRange);
  const vOffsets = scale(scaleDomain, vOffsetRange);
  const blurs = scale(scaleDomain, blurRange);
  const spreads = scale(scaleDomain, spreadRange);

  // h-offset v-offset blur spread color
  for (let i = 0; i < scaleDomain; i++) {
    shadows[i + 1] =
      `${hOffsets[i]}px ${vOffsets[i]}px ${blurs[i]}px ${spreads[i]}px rgba(0, 0, 0, ${opacity})`;
  }

  return shadows as TShadows;
}
