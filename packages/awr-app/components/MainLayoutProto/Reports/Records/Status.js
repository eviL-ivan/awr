import React from "react";
import styled from "styled-components";
import Tooltip from "material-ui/Tooltip";

import Done from "material-ui-icons/Done";
import Clear from "material-ui-icons/Clear";
import AssignmentLate from "material-ui-icons/AssignmentLate";
import AssignmentReturn from "material-ui-icons/AssignmentReturn";
import Alarm from "material-ui-icons/Alarm";
import AssignmentTurnedIn from "material-ui-icons/AssignmentTurnedIn";
import DoneIcon from "material-ui-icons/Done";
import BlockIcon from "material-ui-icons/Block";
import CallMissed from "material-ui-icons/CallMissed";
import Add from "material-ui-icons/Add";
import PriorityHigh from "material-ui-icons/PriorityHigh";
import SendIcon from "material-ui-icons/Send";
import WarningIcon from "material-ui-icons/InfoOutline";
import AddCircleOutline from "material-ui-icons/AddCircleOutline";
// FF9800;

const commonStyle = {
  width: "100%",
  height: "100%",
  color: "white",
  padding: "10px",
  opacity: 0.7
};

const Status = ({ className, status }) => (
  <Tooltip
    className={className}
    id="tooltip-icon"
    title={statusConfig[status].tooltip}
    placement="left"
  >
    {statusConfig[status].comp}
  </Tooltip>
);

export default styled(Status)`
  margin-right: 20px;
  cursor: pointer;
  display: flex !important;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  padding: 5px;
  & > svg {
    border-radius: 50%;
    background: ${p =>
      statusConfig[p.status] ? statusConfig[p.status].background : null};
  }
`;

/**
 * STYLED-COMPONENTS
 */

const statusConfig = {
  complite: {
    tooltip: "Принят",
    comp: <DoneIcon style={commonStyle} />,
    background: "green"
  },
  cancel: {
    tooltip: "Ошибка",
    comp: <Clear style={commonStyle} />,
    background: "red"
  },
  warning: {
    tooltip: "Не принят",
    //comp: <WarningIcon style={commonStyle} />,
    comp: <PriorityHigh style={commonStyle} />,
    background: "#FF9800"
  },
  notCreate: {
    tooltip: "Не создано",
    comp: <Add style={commonStyle} />,
    background: "gray"
  }
};
