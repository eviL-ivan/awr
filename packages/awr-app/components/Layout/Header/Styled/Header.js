import React from "react";
import styled from "styled-components";
import Avatar from 'material-ui/Avatar';
import Badge from 'material-ui/Badge';
import Menu, { MenuItem } from 'material-ui/Menu';
import { ListItem } from 'material-ui/List';

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: #fff;
  }
`;

export const TopProfile = styled(ListItem)`
  position: relative;
  display: flex;
  align-items: center;
  height: ${p => p.theme.header.height};
`;

export const CustomBadge = styled(Badge)`
  span {
    background: #ff4c4c;
    border: ${p => `2px solid ${p.theme.palette.mainColor}`};
    color: #fff;
  }
`;

export const ProfileMenuItem = styled(MenuItem)`
  color: ${p => p.theme.palette.mainColor};
`;

export const ProfileMenu = styled(Menu)`
  margin-top: calc(${p => p.theme.header.height} - 15px);
  
  svg {
    color: ${p => p.theme.palette.textColor};
  }

  ${ProfileMenuItem}:hover {
    background: #fff;

    svg, h3 {
      color: ${p => p.theme.palette.mainColor};
    }
  }
`;

export const CustomAvatar = styled(Avatar)`
  background: #fff !important;

  svg {
    color: ${p => p.theme.palette.mainColor};
  }
`;

export const UserName = styled.span`
  margin-right: 10px;
  color: #fff;
`;