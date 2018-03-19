import React from 'react';
import styled from 'styled-components';
import Typography from 'material-ui/Typography';
import MUIAvatar from 'material-ui/Avatar';
import Stepper, {
  Step as MUIStep,
  StepLabel,
  StepContent as MUIStepContent,
  StepIcon,
  StepButton
} from 'material-ui/Stepper/';
import MUIStepConnector from 'material-ui/Stepper/StepConnector';
// Константы
import { STATUSES } from '../TempConstants';

const StepConnector = styled(MUIStepConnector)`
  margin-left: 20px;
`;

const StepContent = styled(MUIStepContent)`
  margin-left: 20px;
  padding-left: 28px;
`;

const Avatar = styled(MUIAvatar)`
  background: ${p => p.color};
`;
const Step = styled(MUIStep)`
  ${Avatar} {
    background: ${p => !p.completed && !p.active && '#ddd'};
  }
`;

class DocumentView extends React.Component {
  renderStepIcon = status => {
    return <Avatar color={status.color}>{status.icon}</Avatar>;
  };

  render() {
    return (
      <Stepper
        activeStep={2}
        orientation="vertical"
        connector={<StepConnector />}
      >
        {Object.keys(STATUSES).map(statusKey => {
          const status = STATUSES[statusKey];
          if (!status.id) return null;

          return (
            <Step key={status.id}>
              <StepLabel icon={this.renderStepIcon(status)}>
                {status.title}
                <Typography color="textSecondary">
                  <small>{status.description || 'Описание отсутствует'}</small>
                </Typography>
              </StepLabel>
              <StepContent active>
                <Typography color="textSecondary">
                  <p>Какая-то инфа</p>
                </Typography>
              </StepContent>
            </Step>
          );
        })}
      </Stepper>
    );
  }
}

export default DocumentView;
