import React from "react";
import styled from "styled-components";
import SwipeableViews from 'react-swipeable-views';

import { Paper } from "material-ui";

import Registration from "./Registration/Registration";
import RestorePassword from "./RestorePassword/RestorePassword";
import Autorization from "./Autorization/Autorization";
import Logo from "./Logo";

const FormWrapper = styled(Paper) `
  padding: 20px 20px 30px;
`;

const StepWrapper = styled.div`
  margin: 10px;
`;

class SignContainer extends React.Component {
  state = {
    currentIndex: 1, // активный слой: 0 - восстановления пароля, 1 - Авторизация, 2 - Регистрация
  };

  handleChangeIndex = index => () => {
    this.setState({
      currentIndex: index
    });
  };

  render() {
    const { className } = this.props;

    return (
      <div className={className}>
        <Logo />
        <FormWrapper>
          <SwipeableViews index={this.state.currentIndex}>
            <StepWrapper>
              <RestorePassword
                onChangeIndex={this.handleChangeIndex}
              />
            </StepWrapper>
            <StepWrapper>
              <Autorization
                onChangeIndex={this.handleChangeIndex}
              />
            </StepWrapper>
            <StepWrapper>
              <Registration
                onChangeIndex={this.handleChangeIndex}
              />
            </StepWrapper>
          </SwipeableViews>
        </FormWrapper>
      </div>
    );
  }
};

export default styled(SignContainer)`
  margin: 0 10px;
  margin-top: -${p => p.theme.sign.logo.height};
  max-width: 380px;
`;