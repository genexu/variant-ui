import { useState } from 'react';
import { Typography, TextField } from '@variant-ui/react';

const TextFieldSection = () => {
  const [value, setValue] = useState<string>('');

  return (
    <>
      <Typography variant="h4" gutterBottom>
        TextField
      </Typography>
      <TextField
        label="Search: "
        placeholder="Search..."
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <TextField
        label="Search: "
        placeholder="Search..."
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        disabled
      />
      <TextField
        label="Search: "
        placeholder="Search..."
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        error
      />
    </>
  );
};

export default TextFieldSection;
