import { Box, Button, Typography } from '@variant-ui/react';

const ButtonSection = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Button
      </Typography>
      <Box
        display="flex"
        padding={24}
        borderWidth={1}
        borderRadius={4}
        borderStyle="solid"
        borderColor="#DFDFDF"
      >
        <Box margin="0 12px 0 0">
          <Button variant="text">Text</Button>
        </Box>
        <Box margin="0 12px 0 0">
          <Button variant="contained">Contained</Button>
        </Box>
        <Box margin="0 12px 0 0">
          <Button variant="contained-floating">Contained Floating</Button>
        </Box>
        <Box margin="0 12px 0 0">
          <Button variant="outlined">Outlined</Button>
        </Box>
      </Box>
    </>
  );
};

export default ButtonSection;
