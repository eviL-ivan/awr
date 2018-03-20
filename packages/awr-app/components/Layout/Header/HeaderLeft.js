import React from "react";
// Компоненты
import ToggleSidebarButton from "./ToggleSidebarButton";
// Стайлд
import HeaderLeftWrapper from "./Styled/HeaderLeft";

class HeaderLeft extends React.Component {
  render() {
    const { sidebarExpanded, toggleSidebar } = this.props;

    return (
      <HeaderLeftWrapper>
        <ToggleSidebarButton
          sidebarExpanded={sidebarExpanded}
          toggleSidebar={toggleSidebar}
        />
      </HeaderLeftWrapper>
    )
  }
}

export default HeaderLeft;