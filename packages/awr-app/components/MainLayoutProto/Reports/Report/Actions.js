import React from "react";
import styled from "styled-components";

import Edit from "material-ui-icons/Edit";
import DeleteForever from "material-ui-icons/Delete";
import CreateNewFolder from "material-ui-icons/CreateNewFolder";
import FileDownload from "material-ui-icons/FileDownload";
import MoreVert from "material-ui-icons/MoreVert";
import Print from "material-ui-icons/Print";
import Send from "material-ui-icons/Send";
import Button from "material-ui/Button";
import Tooltip from "material-ui/Tooltip";
import Grow from "material-ui/transitions/Grow";

import { Flex } from "components/Common/positional";

const iconStyle = { color: "black", fontSize: "30px" };

// const Actions = ({ status, hover = false }) =>
class Actions extends React.Component {
  render() {
    const { status, hover = false } = this.props;
    if (status === "complite") return <ActionsBlock grow={1} />;
    return (
      <ActionsBlock
        onMouseOver={() => this.setState({ openActions: true })}
        onMouseLeave={() => this.setState({ openActions: false })}
        grow={1}
      >
        {[
          ...statusConfig[status].mainActions,
          ...statusConfig[status].additionallyActions
        ].map((item, index) => {
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
        {/* {statusConfig[status].additionallyActions && (
          <MoreVert style={{ opacity: 0.5 }} />
        )} */}
      </ActionsBlock>
    );
  }
}

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
    back: "black"
  },
  print: {
    //component: <CreateNewFolder style={iconStyle} />,
    component: Print,
    title: "Печать",
    back: "black"
  },
  send: {
    component: Send,
    title: "Отправка",
    back: "#2196F3"
  }
};
const mainActions = ["edit", "delete", "send"];

const statusConfig = {
  cancel: {
    mainActions,
    additionallyActions: ["unload", "print"]
  },
  warning: {
    mainActions,
    additionallyActions: ["unload", "print"]
  },
  notCreate: {
    mainActions: ["create"],
    additionallyActions: []
  },
  complite: []
};

/////////////////////////////
//STYLED-COMPONENTS
/////////////////////////////
const ActionBtn = styled(Button)`
<<<<<<< HEAD
  min-width: 25px !important;
  padding: 0px 7px !important;

  font-size: 12px !important;

  opacity: ${p => (p.status === "notCreate" || p.hover ? 1 : 0.1)} !important;
  box-shadow: none !important;
  background: none !important;
  svg {
    color: ${p => {
      if (p.status === "notCreate") return p.background;
      return p.background && p.hover ? p.background : "black";
    }} !important;

    font-size: 26px !important;
  }
  :hover {
    background: lightgray !important;
  }
=======
  opacity: ${p => (p.status === "notCreate" || p.hover ? 1 : 0.2)} ;
  background: ${p => (p.background ? p.background : "black")} ;
  min-width: 40px ;
  padding: 0px 10px ;
  font-size: 12px ;
>>>>>>> 8d8ffdde0a7fd9e2bab923e1fa63292b916860e6
`;
//background: ${p => (p.background ? p.background : "black")} !important;

const ActionsBlock = Flex.extend`
  justify-content: flex-end;
  align-items: center;
`;
const Container = styled(Tooltip)`
  &:not(:last-child) {
    margin-right: 5px;
  }
`;
