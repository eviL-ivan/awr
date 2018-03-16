import React from "react";
import styled from "styled-components";

import DoneIcon from "material-ui-icons/Person";
import Edit from "material-ui-icons/Edit";
import DeleteForever from "material-ui-icons/Delete";
import CreateNewFolder from "material-ui-icons/CreateNewFolder";
import FileDownload from "material-ui-icons/FileDownload";
import Print from "material-ui-icons/Print";
import Send from "material-ui-icons/Send";

import Button from "material-ui/Button";
import Tooltip from "material-ui/Tooltip";

import RecordTitle from "./RecordTitle";
import Status from "./Status";
import ReportDirectionBadge from "../../Common/ReportDirectionBadge";
import ReportPeriodBlock from "../../Common/ReportPeriodBlock";
import RecordSmallInfoBlock from "./RecordSmallInfoBlock";
import { Flex, Margin, FlexRow } from "components/Common/positional";

//const iconStyle = { color: "white", fontSize: "30px" };

const iconStyle = { fontSize: "30px" };

const Actions = ({ status, hover = false }) => {
  if (status == "complite") return <ActionsBlock grow={1} />;
  return (
    <ActionsBlock grow={1}>
      {statusConfig[status].map((item, index) => {
        const BtnIcon = ActionsBtnConfig[item].component;
        return (
          <Container
            id="tooltip-icon"
            title={ActionsBtnConfig[item].title}
            placement="bottom"
            key={index + ActionsBtnConfig[item].title}
          >
            <ActionBtn
              background={ActionsBtnConfig[item].back}
              variant="raised"
              hover={hover}
              status={status}
            >
              {/* <BtnTitle>Редактировать</BtnTitle> */}
              <BtnIcon style={iconStyle} />
            </ActionBtn>
          </Container>
        );
      })}
    </ActionsBlock>
  );
};

export default Actions;

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
    title: "Cоздать",
    back: "#4CAF50"
  },
  unload: {
    //component: <CreateNewFolder style={iconStyle} />,
    component: FileDownload,
    title: "Выгрузить",
    back: "gray"
  },
  print: {
    //component: <CreateNewFolder style={iconStyle} />,
    component: Print,
    title: "Печать",
    back: "gray"
  },
  send: {
    component: Send,
    title: "Отправка",
    back: "#2196F3"
  }
};
const statusConfig = {
  cancel: ["edit", "delete", "unload", "print", "send"],
  warning: ["edit", "delete", "unload", "print", "send"],
  notCreate: ["create"],
  complite: []
};

/////////////////////////////
//STYLED-COMPONENTS
/////////////////////////////
const ActionBtn = styled(Button)`
  box-shadow: none !important;
  opacity: ${p => (p.status == "notCreate" || p.hover ? 0.6 : 0.4)} !important;
  background: ${p => {
    if (p.status == "notCreate") return p.background;
    if (p.hover && p.background) {
      return p.background;
    } else return "lightgray";
  }} !important;

  & svg {
    color: ${p => {
      if (p.hover) return "white";
      else return "rgba(0, 0, 0, 0.67)";
    }} !important;
  }
  min-width: 30px !important;
  /* padding: 0px 5px !important; */
  padding: 5px !important;
  font-size: 12px !important;
`;

const ActionsBlock = Flex.extend`
  justify-content: flex-end;
  align-items: center;
`;
const Container = styled(Tooltip)`
  &:not(:last-child) {
    margin-right: 5px;
  }
`;
