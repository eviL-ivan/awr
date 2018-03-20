import React from "react";
import { Button, IconButton } from "material-ui";
import { FormControl } from 'material-ui/Form';
import classNames from 'classnames';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { InputWrapper, LinksWrapper, CustomLink } from "../StyledComponents";
import { CircularProgress } from 'material-ui/Progress';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';
import { withStyles } from 'material-ui/styles';
import green from 'material-ui/colors/green';
import Snackbar from 'material-ui/Snackbar';
import axios from "axios";
import NotifyService from "./../../NotificationService";
import { Form, Field } from 'react-final-form';
import TextField from "./../../Components/TextField";
import { email, required, composeValidators } from "./../../Utils/Validate";
import { apiHook } from "./../../Utils/FormUtils";

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing.unit,
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
});

class Autorization extends React.Component {
  constructor(props) {
    super(props);
    apiHook(this);
  }

  state = {
    showPassword: false,
    loading: false
  };

  handleLoginClick = () => {
    this.formApi.submit();
    const { values, valid } = this.formApi.getState();
    if (!valid) return;
    this.setState(state => ({
      loading: true
    }));
    this.auth(values);
  };

  auth = async (values) => {
    try {
      const { data } = await axios.post("Account/Login", values);
      this.setState(state => ({
        loading: false,
      }));
      if (!data.success) throw new Error("Беда c авторизацией");
      NotifyService.addMessage("Успешная авторизация");
    }
    catch (e) {
      this.setState(state => ({
        loading: false,
      }))
      NotifyService.addMessage("При авторизации произошла ошибка");
    }
  }

  handleCloseMessage = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ messageOpen: false });
  };

  handleButtonClick = () => {
    this.setState(state => ({
      showPassword: !state.showPassword
    }));
  };

  handleFieldChange = (field) => ({ target: { value } }) => {
    this.setState(state => ({
      [field]: value
    }));
  }

  togglePasswordView = () => {
    this.setState(state => ({
      showPassword: !state.showPassword
    }));
  };

  onSubmit = () => {
    console.log("sad");
  }

  render() {
    const { onChangeIndex, classes } = this.props;
    const { showPassword, loading, messageOpen, messageText } = this.state;

    return (
      <Form
        onSubmit={this.onSubmit}
        decorators={[this.apiHook]}
        render={() => (
          <div>
            <InputWrapper>
              <Field
                name="email"
                component={TextField}
                type="text"
                label="Электронная почта"
                fullWidth
                validate={composeValidators(required("электронную почту"), email)}
              />
            </InputWrapper>
            <InputWrapper>
              <Field
                name="password"
                type={showPassword ? 'text' : 'password'}
                component={TextField}
                type="text"
                fullWidth
                label="Пароль"
                validate={required("пароль")}
                InputProps={{
                  endAdornment:
                    (<InputAdornment position="end">
                      <IconButton onClick={this.togglePasswordView}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>)
                }}
              />
            </InputWrapper>
            <InputWrapper>
              <Button
                fullWidth color="primary"
                variant="raised"
                disabled={loading}
                onClick={this.handleLoginClick}
              >
                Войти
          </Button>
              {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
            </InputWrapper>
            <LinksWrapper>
              <CustomLink onClick={onChangeIndex(0)}>Забыли пароль?</CustomLink>
              <CustomLink onClick={onChangeIndex(2)}>Регистрация</CustomLink>
            </LinksWrapper>
          </div>)}
      />);
  }
}

export default withStyles(styles)(Autorization);