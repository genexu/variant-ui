import { Box, Paper } from '@variant-ui/react';

const PaperSection = () => {
  // list 24 elevation levels
  const elevations = Array.from({ length: 24 }, (_, i) => i);

  return (
    <Box display="flex" flexFlow="wrap">
      {elevations.map((elevation) => (
        <Paper
          key={elevation}
          elevation={elevation}
          width={100}
          height={60}
          margin={12}
          padding={6}
        >
          {elevation}
        </Paper>
      ))}
    </Box>
  );
};

export default PaperSection;
