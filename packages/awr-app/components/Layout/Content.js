import React from "react";
import styled from "styled-components";

const Content = ({ className, children }) => {
  return (
    <section className={className}>
      {children}
    </section>
  )
};

export default styled(Content)`
  margin-left: ${p => p.sidebarExpanded ? p.theme.sidebarExpanded.width : p.theme.sidebar.width};
  margin-top: ${p => p.theme.header.height};
  transition: all .3s;
  padding: 20px;
`;