import { transformBasicPaletteToPalette } from "@variant-ui/styled-system";
import type {
  TTheme,
  TTypographyVariant,
  TTypographtStyle,
} from "@variant-ui/styled-system";

const palette = transformBasicPaletteToPalette({
  red: "#dc3545",
  purple: "#6f42c1",
  blue: "#0d6efd",
  green: "#198754",
  yellow: "#ffc107",
  orange: "#fd7e14",
  gray: "#9E9E9E",
});

const colors = {
  primary: palette.blue[500],
  secondary: palette.gray[600],
  success: palette.green[500],
  error: palette.red[500],
  warning: palette.yellow[500],
  info: palette.blue[500],
  palette,
};

const fontWeightMedium = 500;
const fontWeightRegular = 400;

const baseFontSize = 1; // rem
const baseLineHeight = 1.2; // rem

const typography = {
  h1: {
    fontSize: `${baseFontSize * 2.5}rem`,
    lineHeight: `${baseLineHeight}rem`,
    fontWeight: fontWeightMedium,
    fontStyle: "normal",
  } as TTypographtStyle,
  h2: {
    fontSize: `${baseFontSize * 2}rem`,
    lineHeight: `${baseLineHeight}rem`,
    fontWeight: fontWeightMedium,
    fontStyle: "normal",
  } as TTypographtStyle,
  h3: {
    fontSize: `${baseFontSize * 1.75}rem`,
    lineHeight: `${baseLineHeight}rem`,
    fontWeight: fontWeightMedium,
    fontStyle: "normal",
  },
  h4: {
    fontSize: `${baseFontSize * 1.5}rem`,
    lineHeight: `${baseLineHeight}rem`,
    fontWeight: fontWeightMedium,
    fontStyle: "normal",
  },
  h5: {
    fontSize: `${baseFontSize * 1.25}rem`,
    lineHeight: `${baseLineHeight}rem`,
    fontWeight: fontWeightMedium,
    fontStyle: "normal",
  },
  h6: {
    fontSize: `${baseFontSize}rem`,
    lineHeight: `${baseLineHeight}rem`,
    fontWeight: fontWeightMedium,
    fontStyle: "normal",
  },
  p: {
    fontSize: "0.875rem",
    lineHeight: `${baseLineHeight}rem`,
    fontWeight: fontWeightRegular,
    fontStyle: "normal",
  },
  span: {
    fontSize: "0.875rem",
    lineHeight: `${baseLineHeight}rem`,
    fontWeight: fontWeightRegular,
    fontStyle: "normal",
  },
} as Record<TTypographyVariant, TTypographtStyle>;

const theme: TTheme = {
  colors,
  typography,
};

export default theme;
