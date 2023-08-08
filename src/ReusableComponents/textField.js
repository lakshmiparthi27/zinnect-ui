import React from 'react';
import TextField from '@mui/material/TextField';

const CustomTextField = ({ label, value, onChange, ...restProps }) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      variant="outlined"
      fullWidth
      {...restProps}
    />
  );
};

export default CustomTextField;
