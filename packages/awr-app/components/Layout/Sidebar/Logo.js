import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Logo = ({ expanded, className }) => (
  <Link href="/">
    <div className={className}>
      {
        expanded
          ? <img src="static/images/logo_small_expanded.png" />
          : <img src="static/images/logo_small.png" />
      }
    </div>
  </Link>
);

export default styled(Logo)`
  height: ${p => p.theme.header.height};
  cursor: pointer;
  display: flex;
  z-index: 4;
  justify-content: center;
  align-items: center;
`;