import React from 'react';
import Button from '@mui/material/Button';

const CustomButton = ({ label, onClick, color, variant, ...restProps }) => {
  return (
    <Button
      onClick={onClick}
      color={color || 'primary'}
      variant={variant || 'contained'}
      {...restProps}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
