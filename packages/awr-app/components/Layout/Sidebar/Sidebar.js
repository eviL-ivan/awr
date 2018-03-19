import React from 'react';
import styled from 'styled-components';
// Компоненты
import Logo from './Logo';
import CreateDocumentButton from './CreateDocumentButton';
import Menu from './Menu';

const Sidebar = props => {
  const { className, expanded, url } = props;

  return (
    <aside className={className}>
      <Logo expanded={expanded} />
      <CreateDocumentButton expanded={expanded} title="Создать документ" />
      <Menu expanded={expanded} url={url} />
    </aside>
  );
};

export default styled(Sidebar)`
  position: fixed;
  background: ${p => p.theme.sidebar.background};
  top: 0;
  z-index: 4;
  box-shadow: 0 0 3px #ccc;
  width: ${p =>
    p.expanded ? p.theme.sidebarExpanded.width : p.theme.sidebar.width};
  height: 100vh;
  transition: all 0.3s;
`;
