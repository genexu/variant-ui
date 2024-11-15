import { Box, Paper, Typography } from '@variant-ui/react';
import { useTheme } from '@variant-ui/react';

const PaperSection = () => {
  const theme = useTheme();
  const borderColor = theme?.colors.palette.gray[300];

  // list 24 elevation levels
  const elevations = Array.from({ length: 24 }, (_, i) => i);

  return (
    <>
      <Typography variant="h4" gutterBottom>Paper</Typography>
      <Box display="flex" flexFlow="wrap">
        {elevations.map((elevation) => (
          <Paper
            key={elevation}
            elevation={elevation}
            width={100}
            height={60}
            margin={12}
            padding={6}
            borderWidth={1}
            borderColor={borderColor}
          >
            {elevation}
          </Paper>
        ))}
      </Box>
    </>
  );
};

export default PaperSection;
