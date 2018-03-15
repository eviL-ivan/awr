import React from "react";
import styled from "styled-components";
import IconButton from "material-ui/IconButton";

const spacing = 0.44;

const ToggleIcon = styled.div`
  width: calc(${p => p.theme.header.height} / 2.8);
  height: calc(${p => p.theme.header.height} / 3.4);
  position: relative;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  cursor: pointer;
  
  span {
    display: block;
    position: absolute;
    height: .16rem;
    width: 100%;
    background: ${p => p.theme.palette.lightTextColor};
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
    
    &:nth-child(1) {
      top: ${p => p.open ? `${spacing*2.5}rem` : "0"};
      width: ${p => p.open && "0"};
      left: ${p => p.open && "50%"};
    }
  
    &:nth-child(2) {
      top: ${`${spacing}rem`};
      transform: rotate(${p => p.open && "45deg"});
    }

    &:nth-child(3) {
      top: ${`${spacing}rem`};
      transform: rotate(${p => p.open && "-45deg"});
    }
  
    &:nth-child(4) {
      top: ${p => p.open ? `${spacing}rem` : `${spacing*2}rem`};
      width: ${p => p.open && "0"};
      left: ${p => p.open && "50%"};
    }
  }
`;

class ToggleSidebarButton extends React.Component {
  render() {
    const { open, onToggle } = this.props;

    return (
      <IconButton onClick={onToggle}>
        <ToggleIcon open={open}>
          <span />
          <span />
          <span />
          <span />
        </ToggleIcon>
      </IconButton>
    );
  }
}

export default ToggleSidebarButton;