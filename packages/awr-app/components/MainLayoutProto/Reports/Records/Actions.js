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

const iconStyle = { color: "white", fontSize: "30px" };

const Actions = ({ status, hover }) => {
  if (status == "complite") return <ActionsBlock grow={1} />;
  return (
    <ActionsBlock grow={1}>
      {statusConfig[status].map(item => {
        const BtnIcon = ActionsBtnConfig[item].component;
        return (
          <Tooltip
            id="tooltip-icon"
            title={ActionsBtnConfig[item].title}
            placement="bottom"
          >
            <ActionBtn
              background={ActionsBtnConfig[item].back}
              variant="raised"
              hover={hover}
            >
              {/* <BtnTitle>Редактировать</BtnTitle> */}
              <BtnIcon style={iconStyle} />
            </ActionBtn>
          </Tooltip>
        );
      })}
    </ActionsBlock>
  );
};

export default Actions;

const ActionBtn = styled(Button)`
  opacity: ${p => (p.hover ? 1 : 0.5)} !important;
  background: ${p => (p.background ? p.background : "black")} !important;
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

const ActionsBtnConfig = {
  edit: {
    //component: <Edit style={iconStyle} />,
    component: Edit,
    title: "Обработано",
    back: "#3F51B5"
  },
  delete: {
    //component: <DeleteForever style={iconStyle} />,
    component: DeleteForever,
    title: "Удалить",
    back: "#F44336"
  },
  create: {
    //component: <CreateNewFolder style={iconStyle} />,
    component: CreateNewFolder,
    title: "Обработано",
    back: "#4CAF50"
  }
};
const statusConfig = {
  cancel: ["edit", "delete"],
  warning: ["edit", "delete"],
  notCreate: ["create"],
  complite: []
};
