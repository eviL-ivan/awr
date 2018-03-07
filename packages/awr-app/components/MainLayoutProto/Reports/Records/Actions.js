import React from "react";
import styled from "styled-components";
import DoneIcon from "material-ui-icons/Person";
import Edit from "material-ui-icons/Edit";
import DeleteForever from "material-ui-icons/Delete";
import CreateNewFolder from "material-ui-icons/CreateNewFolder";
import RecordTitle from "./RecordTitle";
import Status from "./Status";
import ReportDirectionBadge from "../../Common/ReportDirectionBadge";
import ReportPeriodBlock from "../../Common/ReportPeriodBlock";
import RecordSmallInfoBlock from "./RecordSmallInfoBlock";
import { Flex, Margin, FlexRow } from "components/Common/positional";
import Button from "material-ui/Button";
import Tooltip from "material-ui/Tooltip";

const Actions = ({ status }) => {
  if (status == "complite") return <ActionsBlock grow={1} />;
  return (
    <ActionsBlock grow={1}>
      {statusConfig[status].map(item => {
        return (
          <Tooltip
            id="tooltip-icon"
            title={ActionsBtnConfig[item].title}
            placement="bottom"
          >
            <ActionBtn variant="raised">
              {/* <BtnTitle>Редактировать</BtnTitle> */}
              {ActionsBtnConfig[item].component}
            </ActionBtn>
          </Tooltip>
        );
      })}
    </ActionsBlock>
  );
};

export default Actions;

const ActionBtn = styled(Button)`
  min-width: 50px !important;
  padding: 0px 10px !important;
  font-size: 12px !important;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const ActionsBlock = Flex.extend`
  justify-content: flex-end;
  align-items: center;
`;
const iconStyle = { color: "white", fontSize: "30px" };
const ActionsBtnConfig = {
  edit: {
    component: <Edit style={iconStyle} />,
    title: "Обработано"
  },
  delete: {
    component: <DeleteForever style={iconStyle} />,
    title: "Удалить"
  },
  create: {
    component: <CreateNewFolder style={iconStyle} />,
    title: "Обработано"
  }
};
const statusConfig = {
  cancel: ["edit", "delete"],
  warning: ["edit", "delete"],
  notCreate: ["create"],
  complite: []
};
