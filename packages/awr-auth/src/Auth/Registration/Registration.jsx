import React from "react";
import { TextField, Button } from "material-ui";
import { InputWrapper, LinksWrapper, CustomLink, CustomTitle, CustomSubTitle } from "../StyledComponents";

class Registration extends React.Component {

  handleRegisterClick = () => {

  }

  render() {
    const { onChangeIndex } = this.props;
    return (
      <div>
        <CustomTitle>Регистрация</CustomTitle>
        <CustomSubTitle>
          <small>
            Нажимая кнопку "Зарегистрироваться", Вы принимаете <CustomLink>условия данного Лицензионного соглашения</CustomLink>
          </small>
        </CustomSubTitle>
        <InputWrapper>
          <TextField
            label="Электронная почта"
            fullWidth
          />
        </InputWrapper>
        <InputWrapper>
          <Button
            fullWidth
            color="primary"
            variant="raised"
            onClick={this.handleRegisterClick}
          >
            Зарегистрироваться
      </Button>
        </InputWrapper>
        <LinksWrapper>
          <CustomLink onClick={onChangeIndex(0)}>Забыли пароль?</CustomLink>
          <CustomLink onClick={onChangeIndex(1)}>Вход</CustomLink>
        </LinksWrapper>
      </div>
    );
  }
}

export default Registration;