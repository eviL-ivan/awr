import React from 'react';
import styled from "styled-components";
import MUIAvatar from 'material-ui/Avatar';
import List, { ListItem, ListItemText } from 'material-ui/List';
import MUIIconButton from "material-ui/IconButton";
// Иконки
import DownLoadIcon from "material-ui-icons/FileDownload";
import PrintIcon from "material-ui-icons/Print";

const PrimaryTitle = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
`;

const Avatar = styled(MUIAvatar)`
  height: 50px;
  width: 50px;
  
  img {
    width: 100%;
  }
`;

const IconButton = styled(MUIIconButton)`

  &:not(:first-of-type) {
    margin-left: -15px;
  }
  
  &:hover {
    color: ${p => p.theme.palette.mainColor};
    svg {
      color: ${p => p.theme.palette.mainColor};
    }
  }
`;

const DocumentTitle = ({ title }) => (
  <div>
    <ListItem>
      <Avatar>
        <img src="http://gazetauzao.ru/wa-data/public/photos/80/44/4480/4480.970.jpg" alt=""/>
      </Avatar>
      <ListItemText
        primary={
          <PrimaryTitle>
            {title}
            <IconButton>
              <DownLoadIcon />
            </IconButton>
            <IconButton>
              <PrintIcon />
            </IconButton>
          </PrimaryTitle>}
        secondary="Описание файла"
      />
    </ListItem>
  </div>
);

export default DocumentTitle;
