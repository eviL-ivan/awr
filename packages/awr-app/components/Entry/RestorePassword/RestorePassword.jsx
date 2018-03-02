import React from "react";
import { TextField, Button } from "material-ui";
import { InputWrapper, LinksWrapper, CustomLink, CustomTitle, CustomSubTitle } from "../StyledComponents";

const RestorePassword = ({ onChangeIndex }) => (
  <div>
    <CustomTitle>Восстановление пароля</CustomTitle>
    <CustomSubTitle>
      <small>
        Вся информация по восстановлению доступа будет отправлена на Вашу электронную почту
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
        fullWidth color="primary" variant="raised"
      >
        Восстановить
      </Button>
    </InputWrapper>
    <LinksWrapper>
      <CustomLink onClick={onChangeIndex(1)}>Вход</CustomLink>
      <CustomLink onClick={onChangeIndex(2)}>Регистрация</CustomLink>
    </LinksWrapper>
  </div>
);

export default RestorePassword;