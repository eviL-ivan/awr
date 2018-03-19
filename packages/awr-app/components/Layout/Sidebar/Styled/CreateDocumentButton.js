import React from 'react';
import styled from 'styled-components';
import { Button as MuiButton } from 'material-ui';

export const Button = styled(MuiButton)`
  white-space: nowrap;
  width: ${p => p.expanded && '100%'};
  padding: ${p => p.expanded && '0'};
  min-width: ${p => p.expanded && '0'};
  height: ${p => p.expanded && '50px'};
  background: #42941a;
`;

export const Wrapper = styled.div`
  padding: ${p => (p.expanded ? '0 0 10px' : '10px')};
  text-align: ${p => p.expanded && 'center'};
  background: #fff;

  svg {
    margin-right: ${p => !p.expanded && '5px'};
  }
`;
