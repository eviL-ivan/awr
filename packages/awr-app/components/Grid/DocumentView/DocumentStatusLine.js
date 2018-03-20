import React from 'react';
import styled from "styled-components";
import Typography from 'material-ui/Typography';
import MUIStepper, {
  Step as MUIStep, StepLabel as MUIStepLabel,
  StepContent as MUIStepContent,
  StepIcon, StepButton } from 'material-ui/Stepper/';
import MUIAvatar from 'material-ui/Avatar';
import MUIStepConnector from 'material-ui/Stepper/StepConnector';
// Иконки
import CreatedIcon from "material-ui-icons/Assignment";
import DeliveredIcon from "material-ui-icons/AssignmentTurnedIn";
import SendIcon from "material-ui-icons/Reply";
import CompleteIcon from "material-ui-icons/Check";

const StatusLineWrapper = styled.div`
  background: #fafafa;
  border: 1px solid #dedede;
  border-left: 0;
  border-right: 0;
`;

const Stepper = styled(MUIStepper)`
  background: transparent;
`;

const StepConnector = styled(MUIStepConnector)`
  height: 7px;
  top: 18px;
  background: ${p => p.theme.palette.mainColor};
  margin: 0 10px;

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: -6px;
    right: -14px;
    border: 10px solid;
    border-bottom-color: transparent;
    border-right-color: transparent;
    border-top-color: transparent;
  }
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
  
  ${StepConnector} {
    background: ${p => p.completed ? p.theme.palette.mainColor : '#ddd'};
    
    &:after {
      border-left-color: ${p => p.completed ? p.theme.palette.mainColor : '#ddd'};
    }
  }
`;

const StepLabel = styled(MUIStepLabel)`
  
`;

const CustomSendIcon = styled(SendIcon)`
  transform: scaleX(-1);
`;

const renderStepIcon = status => {
  return <Avatar color={status.color}>{status.icon}</Avatar>;
};

const STATUS_LINE = {
  created: {
    id: 0,
    title: "Создан",
    icon: <CreatedIcon />,
    color: "#7E8992",
    description: ""
  },
  send: {
    id: 1,
    title: "Отправлен",
    icon: <CustomSendIcon />,
    color: "#317892",
    description: "Документ отправлен"
  },
  delivered: {
    id: 2,
    title: "Доставлен",
    icon: <DeliveredIcon />,
    color: "#0071D4",
    description: ""
  },
  processing: {
    id: 3,
    title: "Принят",
    icon: <CompleteIcon />,
    color: "#0aac18",
    description: ""
  },
};

const DocumentStatusLine = ({ hoba }) => (
  <StatusLineWrapper>
    <Stepper
      activeStep={1}
      connector={<StepConnector />}
      alternativeLabel
    >
      {Object.keys(STATUS_LINE).map(statusKey => {
        const status = STATUS_LINE[statusKey];

        return (
          <Step key={status.id}>
            <StepLabel icon={renderStepIcon(status)}>{status.title}</StepLabel>
          </Step>
        );
      })}
    </Stepper>
  </StatusLineWrapper>
);

export default DocumentStatusLine;
