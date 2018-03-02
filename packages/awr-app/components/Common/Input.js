import React from "react";
import Input, { InputLabel } from "material-ui/Input";
import { FormControl, FormHelperText } from "material-ui/Form";

const InputKA = ({ label, value, disabled, formHelperText, ...props }) => (
  <FormControl
    disabled={disabled}
    style={{ display: "flex", justifyContent: "center" }}
  >
    <InputLabel htmlFor="name-disabled">{label}</InputLabel>
    <Input id="name-disabled" value={value} {...props} />
    {formHelperText && (
      <FormHelperText id="name-helper-text" style={{ textAlign: "center" }}>
        {formHelperText}
      </FormHelperText>
    )}
  </FormControl>
);

export default InputKA;
