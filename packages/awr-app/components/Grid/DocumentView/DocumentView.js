import React from 'react';
import styled from 'styled-components';
import Typography from 'material-ui/Typography';
import MUIAvatar from 'material-ui/Avatar';
import MUIPaper from 'material-ui/Paper';
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
// Компоненты
import DocumentTitle from "./DocumentTitle";
import DocumentInfo from "./DocumentInfo";
import DocumentStatusLine from "./DocumentStatusLine";
import { ListItemText } from "material-ui/List/index";

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

const Paper = styled(MUIPaper)`
  // box-shadow: 0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8;
`;

const DOCUMENT_INFO = {
  title: "Налог на физических лиц",
  deadline: "23.03.2018",
  organization: `ОАО "Рога и копыта"`,
  period: "I квартал 2018",
  recipient: "ИФНС040",
};

class DocumentView extends React.Component {
  renderStepIcon = status => {
    return <Avatar color={status.color}>{status.icon}</Avatar>;
  };

  render() {
    return (
      <Paper>
        <DocumentTitle
          title={DOCUMENT_INFO.title}
        />
        <DocumentInfo
          deadline={DOCUMENT_INFO.deadline}
          organization={DOCUMENT_INFO.organization}
          period={DOCUMENT_INFO.period}
          recipient={DOCUMENT_INFO.recipient}
        />
        <DocumentStatusLine />
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
      </Paper>
    );
  }
}

export default DocumentView;
