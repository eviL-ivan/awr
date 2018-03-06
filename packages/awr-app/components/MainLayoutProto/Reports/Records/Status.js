import React from "react";
import styled from "styled-components";
import Done from "material-ui-icons/Done";
import Clear from "material-ui-icons/Clear";
import AssignmentLate from "material-ui-icons/AssignmentLate";
import AssignmentReturn from "material-ui-icons/AssignmentReturn";
import Alarm from "material-ui-icons/Alarm";
import AssignmentTurnedIn from "material-ui-icons/AssignmentTurnedIn";
import Tooltip from "material-ui/Tooltip";

import DoneIcon from "material-ui-icons/Done";
import ErrorIcon from "material-ui-icons/Clear";
import BlockIcon from "material-ui-icons/Block";
import SendIcon from "material-ui-icons/Send";
import WarningIcon from "material-ui-icons/InfoOutline";
import AddCircleOutline from "material-ui-icons/AddCircleOutline";
// FF9800;

const commonStyle = {
  width: "30px",
  height: "30px",
  color: "white"
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
  border-radius: 50%;
  background: ${p => statusConfig[p.status].background};
`;

const statusConfig = {
  complite: {
    tooltip: "Обработано",
    comp: <DoneIcon style={commonStyle} />,
    background: "green"
  },
  cancel: {
    tooltip: "Отказано",
    comp: <BlockIcon style={commonStyle} />,
    background: "red"
  },
  warning: {
    tooltip: "На доработку",
    comp: <WarningIcon style={commonStyle} />,
    background: "#FF9800"
  },
  notCreate: {
    tooltip: "Не создано",
    comp: <AddCircleOutline style={commonStyle} />,
    background: "gray"
  }
};
