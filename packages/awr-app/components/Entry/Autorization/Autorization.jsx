import React from "react";
import { TextField, Button, IconButton } from "material-ui";
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { InputWrapper, LinksWrapper, CustomLink } from "../StyledComponents";

import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';

class Autorization extends React.Component {
  state = {
    showPassword: false
  };

  togglePasswordView = () => {
    this.setState(state => ({
      showPassword: !state.showPassword
    }));
  };

  render() {
    const { onChangeIndex } = this.props;
    const { showPassword } = this.state;

    return (
      <div>
        <InputWrapper>
          <TextField
            label="Электронная почта"
            fullWidth
          />
        </InputWrapper>
        <InputWrapper>
          <FormControl fullWidth>
            <InputLabel htmlFor="password">Пароль</InputLabel>
            <Input
              id="adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={this.togglePasswordView}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </InputWrapper>
        <InputWrapper>
          <Button fullWidth color="primary" variant="raised">Войти</Button>
        </InputWrapper>
        <LinksWrapper>
          <CustomLink onClick={onChangeIndex(0)}>Забыли пароль?</CustomLink>
          <CustomLink onClick={onChangeIndex(2)}>Регистрация</CustomLink>
        </LinksWrapper>
      </div>
    );
  }
}

export default Autorization;