import React from "react";
import styled from "styled-components";
import Done from "material-ui-icons/Done";
import Clear from "material-ui-icons/Clear";
import AssignmentLate from "material-ui-icons/AssignmentLate";
import AssignmentReturn from "material-ui-icons/AssignmentReturn";
import Alarm from "material-ui-icons/Alarm";
import AssignmentTurnedIn from "material-ui-icons/AssignmentTurnedIn";
import Tooltip from "material-ui/Tooltip";

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
`;

const statusConfig = {
  complite: {
    tooltip: "Обработано",
    comp: (
      <AssignmentTurnedIn
        style={{
          width: "30px",
          height: "30px",
          color: "green"
        }}
      />
    )
  },
  cancel: {
    tooltip: "Отказано",
    comp: (
      <AssignmentReturn
        style={{
          width: "30px",
          height: "30px",
          color: "red"
        }}
      />
    )
  },
  warning: {
    tooltip: "На доработку",
    comp: (
      <AssignmentLate
        style={{
          width: "30px",
          height: "30px",
          color: "#CDD326"
        }}
      />
    )
  },
  notCreate: {
    tooltip: "Не создано",
    comp: (
      <Alarm
        style={{
          width: "30px",
          height: "30px",
          color: "gary"
        }}
      />
    )
  }
};
