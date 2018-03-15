import React from "react";
import AddDocumentIcon from 'material-ui-icons/NoteAdd';

// Стайлд компоненты
import { Button, Wrapper } from "./Styled/CreateDocumentButton";

const CreateDocumentButton = ({ expanded }) => (
  <Wrapper expanded={expanded}>
    <Button
      color="primary"
      variant="raised"
      expanded={expanded}
      fullWidth={!expanded}
    >
      <AddDocumentIcon />
      {!expanded && "Создать документ"}
    </Button>
  </Wrapper>
);

export default CreateDocumentButton;