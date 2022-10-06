import { TextField } from '@mui/material';
import { PropTypes } from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

InputFeature.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputFeature(props) {
  const { form, name, label, disabled } = props;
  const { control } = form;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { invalid, error } }) => (
        <TextField
          {...field}
          fullWidth
          label={label}
          disabled={disabled}
          error={invalid}
          helperText={error?.message}
        />
      )}
    />
  );
}

export default InputFeature;
