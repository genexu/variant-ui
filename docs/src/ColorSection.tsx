import { Box, Typography, useTheme } from '@variant-ui/react';
import type { TPaletteColor } from '@variant-ui/styled-system';

type TColorBlock = {
  w: number;
  h: number;
  color: string;
  name?: string;
};

const ColorBlock = ({ w, h, color, name }: TColorBlock) => {
  if (!name) return <Box width={w} height={h} bgColor={color} />;

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        {name}
      </Typography>
      <Box width={w} height={h} bgColor={color} />
    </Box>
  );
};

type TColorScale = {
  color: TPaletteColor;
};

const ColorScale = ({ color }: TColorScale) => {
  const theme = useTheme();
  if (!theme) return null;

  const index = [100, 200, 300, 400, 500, 600, 700, 800, 900] as const;
  const palette = theme.colors.palette[color];

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        {color}
      </Typography>
      <Box display="flex" flexDirection="column">
        {index.map((i) => (
          <ColorBlock key={i} w={100} h={50} color={palette[i]} />
        ))}
      </Box>
    </Box>
  );
};

const ColorSection = () => {
  const theme = useTheme();
  if (!theme) return null;

  const colors = theme.colors;

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Color Palette
      </Typography>
      <Box display="flex">
        <ColorBlock name="primary" w={100} h={100} color={colors.primary} />
        <ColorBlock name="secondary" w={100} h={100} color={colors.secondary} />
        <ColorBlock name="success" w={100} h={100} color={colors.success} />
        <ColorBlock name="error" w={100} h={100} color={colors.error} />
        <ColorBlock name="warning" w={100} h={100} color={colors.warning} />
        <ColorBlock name="info" w={100} h={100} color={colors.info} />
      </Box>
      <Box display="flex">
        {Object.keys(colors.palette).map((color) => (
          <ColorScale
            key={color}
            color={color as keyof typeof colors.palette}
          />
        ))}
      </Box>
    </>
  );
};

export default ColorSection;
