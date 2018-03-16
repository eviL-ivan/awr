import React from "react";
import AddDocumentIcon from 'material-ui-icons/NoteAdd';
// Стайлд компоненты
import { Button, Wrapper } from "./Styled/CreateDocumentButton";
import Tooltip from "components/Common/Tooltip"

const CreateDocumentButton = ({ expanded, title }) => {
  const renderButton = () => (
    <Button
      color="primary"
      variant="raised"
      expanded={expanded}
      fullWidth={!expanded}
    >
      <AddDocumentIcon/>
      {!expanded && title}
    </Button>
  );

  return (
    <Wrapper expanded={expanded}>
      {
        expanded
        ? <Tooltip title={title} placement="right">{renderButton()}</Tooltip>
        : renderButton()
      }
    </Wrapper>
  );
};

export default CreateDocumentButton;